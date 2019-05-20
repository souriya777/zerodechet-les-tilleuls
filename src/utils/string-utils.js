
/*
Pads 3 decimal, uses comma ','

eg.
0.25 returns 0,250
.25 returns 0,250
1.2 returns 1,200
*/
export const padWeight = nb => {
  return ('' + Number(nb).toFixed(3)).replace('.', ',')
}