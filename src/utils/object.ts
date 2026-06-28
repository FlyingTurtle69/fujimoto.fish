type Entry<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T];

export function objectKeys<T extends object>(object: T): (keyof T)[] {
  return Object.keys(object) as (keyof T)[];
}

function objectEntries<T extends object>(object: T): Entry<T>[] {
  return Object.entries(object) as Entry<T>[];
}

export function objectMap<T extends object, U>(
  object: T,
  callbackfn: ([key, value]: Entry<T>) => U,
) {
  return objectEntries(object).map(callbackfn);
}

export function defineRecord<V>() {
  return <K extends string>(record: Record<K, V>): Record<K, V> => record;
}
