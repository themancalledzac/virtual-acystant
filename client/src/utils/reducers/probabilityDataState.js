const probabilityDataState = (state = [], { type, payload }) => {
  switch (type) {
    case "RETURN_DATA":
      return (state = payload);
    default:
      return state;
  }
};

export default probabilityDataState;