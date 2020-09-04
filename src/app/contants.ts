export class Constants {
  public static SERVER_URL: string = 'http://localhost:8080/';
  public static USER_RESOURCE: string = Constants.SERVER_URL + 'user/';

  public static CREATE_USER: string = Constants.USER_RESOURCE;
  public static LOGIN_USER: string = Constants.USER_RESOURCE + 'login';

  public static MANDATORY_FIELDS_ERROR_MESSSAGE = "All fields are required.";
  public static NOT_A_NUMBER_ERROR_MESSAGE = 'Not a number.';
}
