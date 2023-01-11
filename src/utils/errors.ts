export function conflictError(message: object){
  return {
    type: "conflict",
    ...message
  }
}

export function unauthorizedError(message: object) {
  return {
    type: 'unauthorized',
    ...message
  };
}

export function not_foundError(message: object) {
  return {
    type: 'not_found',
    ...message
  };
}

export function bad_requestError(message: object) {
  return {
    type: 'bad_request',
    ...message
  };
}