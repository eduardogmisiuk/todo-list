/**
 * Base class for all HTTP errors in the project.
 */
class HTTPError {
  reason: { msg: string };
  status: number;

  constructor(reason: string, status: number) {
    this.reason = {msg: reason};
    this.status = status;
  }
}

export default HTTPError;
