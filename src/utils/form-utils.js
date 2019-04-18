export const getValueFrom = e => {
  const target = e.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const id = target.id;

  return {id, value};
}
