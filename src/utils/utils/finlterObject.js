function filterObject(obj, fields) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, _]) => fields.includes(key))
  );
}

export default filterObject;
