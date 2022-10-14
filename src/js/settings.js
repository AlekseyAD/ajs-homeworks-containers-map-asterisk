export default class Settings {
  constructor() {
    this.defaultSettings = new Map();
    this.defaultSettings
      .set('theme', 'dark')
      .set('music', 'trance')
      .set('difficulty', 'easy');

    this.userSettings = new Map();
  }

  get settings() {
    return new Map([...this.defaultSettings].concat([...this.userSettings]));
  }
}
