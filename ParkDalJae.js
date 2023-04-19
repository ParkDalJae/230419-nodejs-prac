//정적인 객체 리터럴, 데이터를 넣을 자리를 마련했다
let basicData = {
  header: {},
  main: {},
  footer: {},
};
//formJsonData 변수는
//json.parse() 를 통해 받아온 데이터라고 가정한다.
let formJsonData = {
  header: {
    content: "header 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#ccc",
    },
  },
  main: {
    content: "main 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#333",
    },
  },
  footer: {
    content: "footer 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#666",
    },
  },
};
function exampleOne(basicData, formJsonData) {
  let value = "";
  //아래의 호출부를 참고하여, 지역변수 value에
  //적절한 문자열 데이터로 객체를 가공하는 코드를 작성한다

  basicData.header.innerHTML = `<div style="width: ${formJsonData.header.style.width}; height: ${formJsonData.header.style.height}; background-color: ${formJsonData.header.style.backgroundColor};">${formJsonData.header.content}</div>`;

  basicData.main.innerHTML = `<div style="width: ${formJsonData.main.style.width}; height: ${formJsonData.main.style.height}; background-color: ${formJsonData.main.style.backgroundColor};">${formJsonData.main.content}</div>`;

  basicData.footer.innerHTML = `<div style="width: ${formJsonData.footer.style.width}; height: ${formJsonData.footer.style.height}; background-color: ${formJsonData.footer.style.backgroundColor};">${formJsonData.footer.content}</div>`;
  for (let i in basicData) {
    for (let j in basicData[i]) {
      value += basicData[i][j];
    }
  }
  return value;
}
function test(formJsonData) {
  for (let i in formJsonData) {
    for (let j in formJsonData[i]) {
      if (typeof formJsonData[i][j] === "object") {
        for (let k in formJsonData[i][j]) {
          console.log(`${k} : "${formJsonData[i][j][k]}"`);
        }
      } else {
        console.log(`${j} : ${formJsonData[i][j]}`);
      }
    }
  }
}
// test(formJsonData);
//특정 HTML 요소에 값을 넣는것을 가정한다
const element = {};
// const element = ""; // * 방법 못찾음
// element.innerHTML = "!234";
element.innerHTML = exampleOne(basicData, formJsonData);
console.log(element);

//위의 formJsonData와 같은 객체나 JSON 을 생성하기 위한
//생성자함수, 클래스를 작성한다
//setter기능을 활용하여 인스턴스의 값들은 모두 "문자열"만 들어가도록
//안정성을 확보한다.
class ExampleTwo {
  constructor(nameData, genderData, asdfData) {
    if (typeof nameData !== "string") {
      throw new Error(`${nameData}는 문자가 아닙니다.`);
    }
    if (typeof genderData !== "string") {
      throw new Error(`${genderData}는 문자가 아닙니다.`);
    }
    if (typeof asdfData !== "string") {
      throw new Error(`${asdfData}는 문자가 아닙니다.`);
    }
    this.tmpObj = { nameData, genderData, asdfData };
    this.name = nameData;
    this.gender = genderData;
    this.asdf = asdfData;
  }
  set nameData(nameData) {
    if (typeof nameData !== "string") {
      throw new Error(`${nameData}는 문자가 아닙니다.`);
    }
    this.tmpObj.nameData = nameData;
  }
  set genderData(genderData) {
    if (typeof genderData !== "string") {
      throw new Error(`${genderData}는 문자가 아닙니다.`);
    }
    this.tmpObj.genderData = genderData;
  }
  set asdfData(asdfData) {
    if (typeof asdfData !== "string") {
      throw new Error(`${asdfData}는 문자가 아닙니다.`);
    }
    this.tmpObj.asdfData = asdfData;
  }
  kakaru() {
    console.log(this.tmpObj);
  }
}

const createObj = new ExampleTwo("kakaru", "man", "fff");
createObj.kakaru();
