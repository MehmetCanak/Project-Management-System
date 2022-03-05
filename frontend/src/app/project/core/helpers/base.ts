import { environment } from './../../../../environments/environment';

declare var $: any;
document.title = environment.title;

export abstract class BaseHelper 
{     
  public static angaryosUrlPath:string = environment.urlPath;

  public static formSendMethod = 'POST';
  
  public static backendBaseUrl:string = "https://"+environment.host+"/";
  public static backendUrl:string = "https://"+environment.host+"/api/v1/";
  public static dashboardUrl:string = "http://"+environment.host+"/#/"+environment.urlPath+"dashboard";
  public static baseUrl:string = "https://"+environment.host+"/#/"+environment.urlPath+"";
  
  public static noImageUrl = 'assets/img/404.png';

  public static tokenTimeOut = 1000 * 60 * 60 * 24 * 5;
  public static token:string = "";
  public static firebaseToken:string = "";
  public static debug:boolean = true;
  public static loggedInUserInfo = null;

  public static backendServiceControl = null;

  public static addedScripts = {};
  public static pipe = {};
  
  

}