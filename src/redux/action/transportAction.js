export const VEHICLE_TYPE = 'VEHICLE_TYPE';

export const setVehicle = (transportDetail) => ({
  type: VEHICLE_TYPE,
  payload: { transportDetail }
});
