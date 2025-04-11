export const VEHICLE_TYPE = 'VEHICLE_TYPE';
export const LOGOUT_USER = 'LOGOUT_USER';

export const setVehicle = (id, transportDetail) => ({
  type: VEHICLE_TYPE,
  payload: { id, transportDetail }
});
