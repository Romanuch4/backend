class Storage {
  storage: Map<any, any>;
  constructor() {
    this.storage = new Map();
  }

  save({ token, key }: Record<string, string>) {
    this.storage.set(token, key);
  }

  getKey(token: string) {
    const key = this.storage.get(token);
    return key;
  }
}

export const keyStorage = new Storage();
