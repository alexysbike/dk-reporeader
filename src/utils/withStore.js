/* eslint-disable import/prefer-default-export */
import { create } from 'proppy';

const defaultOptions = {
  providerName: 'store',
  providerDispatchName: 'dispatch',
};

export function withStore(
  mapState,
  mapDispatch,
  options = defaultOptions,
) {
  return create({
    initialize() {
      this._store = this.providers[options.providerName];
      this._dispatch = this.providers[options.providerDispatchName];

      if (!this._store) {
        throw new Error('Store not found');
      }

      if (mapState) {
        this.set(mapState.apply(this, [
          this._store.getState(),
          this.props,
          this.providers,
        ]));
        this._storeSubscription = this._store.subscribe(() => {
          this.set(mapState.apply(this, [
            this._store.getState(),
            this.props,
            this.providers,
          ]));
        });
      }

      if (mapDispatch) {
        this.set(mapDispatch.apply(this, [
          this._dispatch,
        ]));
      }
    },

    willDestroy() {
      if (this._storeSubscription) {
        this._storeSubscription();
      }
    },
  });
}
