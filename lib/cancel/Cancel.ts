/**
 * Based of https://github.com/axios/axios
 * Copyright (c) 2014-present Matt Zabriskie (MIT License)
 */
export class Cancel {
  public __CANCEL__: boolean = true;

  constructor(public message = "Cancel") {}

  public toString() {
    return this.message;
  }
}

export default Cancel;
