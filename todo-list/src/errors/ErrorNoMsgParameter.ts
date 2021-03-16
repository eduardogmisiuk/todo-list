import HTTPError from "./HTTPError";

class ErrorNoMsgParameter extends HTTPError {
  constructor() {
    super("there must be a 'msg' parameter in the body", 400);
  }
}

export default ErrorNoMsgParameter;
