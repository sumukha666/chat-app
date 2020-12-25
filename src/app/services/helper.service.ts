import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HelperService {
  constructor() {}

  userObj = [
    {
      id: 1,
      name: "Ria",
      prof: "Doctor",
    },
    {
      id: 2,
      name: "Diya",
      prof: "Software Developer",
    },
    {
      id: 3,
      name: "Vani",
      prof: "HR Manager",
    },
    {
      id: 4,
      name: "Rose",
      prof: "Artist",
    },
    {
      id: 5,
      name: "Raju",
      prof: "Coach",
    },
    {
      id: 6,
      name: "Ram",
      prof: "Business",
    },
    {
      id: 7,
      name: "Sam",
      prof: "Student",
    },
  ];

  quotes = [
    "The Best Way To Get Started Is To Quit Talking And Begin Doing.",
    "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
    "Don't Let Yesterday Take Up Too Much Of Today",
    "Your limitation—it’s only your imagination.",
    "Sometimes later becomes never. Do it now.",
    " Push yourself, because no one else is going to do it for you.",
    " Great things never come from comfort zones.",
    " Dream it. Wish it. Do it.",
    "Dream bigger. Do bigger.",
    " Little things make big days.",
  ];

  getPostDetails(): object {
    const postId = (Math.round(Math.random() * 10) % 6) + 1;
    const quotesId = Math.round(Math.random() * 10) % 10;
    const userId = Math.round(Math.random() * 10) % 7;
    const returnObj = this.userObj[userId];
    // tslint:disable-next-line: no-string-literal
    returnObj["postUrl"] = "/assets/posts/" + postId + ".jpg";
    // tslint:disable-next-line: no-string-literal
    returnObj["cardText"] = this.quotes[quotesId];
    // tslint:disable-next-line: no-string-literal
    returnObj["iconUrl"] =
      "background-image: url(/assets/icons/" + returnObj.id + ".jpg);";
    return returnObj;
  }
}
