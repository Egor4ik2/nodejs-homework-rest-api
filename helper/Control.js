const Control = (ctrl) => {
    const func = async (req, res, next) => {
      try {
        await ctrl(req, res, next);
      } catch (error) {
        next(error);
      }
    };
  
    return func;
  };
  
  export default Control;