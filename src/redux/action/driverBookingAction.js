export const DRIVER_INFO = 'DRIVER_INFO';

export const setDriverInfo = (riderInfo) => ({
  type: DRIVER_INFO,
  payload: { riderInfo }
});
