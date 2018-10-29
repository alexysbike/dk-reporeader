import es from './files/es';

let activeFile = {};
class TranslateService {
  static t(str) {
    return activeFile[str] || str;
  }

  static setLanguage(key) {
    if (key === 'es') {
      activeFile = es;
    } else {
      activeFile = {};
    }
  }
}

export default TranslateService;
