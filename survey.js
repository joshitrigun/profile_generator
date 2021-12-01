const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question1 = () => {
  return new Promise((res, _) => {
    rl.question(
      "What's your name? Nicknames are also acceptable :)",
      (answer) => {
        //console.log(`Name: ${answer}`);
        res(answer);
      }
    );
  });
};
const question2 = () => {
  return new Promise((res, _) => {
    rl.question("What's an activity you like doing?", (answer) => {
      //console.log(`Activity: ${answer}`);
      res(answer);
    });
  });
};
const question3 = () => {
  return new Promise((res, _) => {
    rl.question("What do you listen to while doing that?", (answer) => {
      //console.log(`Sports: ${answer}`);
      res(answer);
    });
  });
};
const question4 = () => {
  return new Promise((res, _) => {
    rl.question(
      "Which meal is your favourite (eg: dinner, brunch, etc.)",
      (answer) => {
        //console.log(`Meal Options: ${answer}`);
        res(answer);
      }
    );
  });
};
const question5 = () => {
  return new Promise((res, _) => {
    rl.question(
      "What's your favourite thing to eat for that meal?",
      (answer) => {
        //console.log(`Meal: ${answer}`);
        res(answer);
      }
    );
  });
};
const question6 = () => {
  return new Promise((res, _) => {
    rl.question("Which sport is your absolute favourite?", (answer) => {
      //console.log(`Sports: ${answer}`);
      res(answer);
    });
  });
};
const question7 = () => {
  return new Promise((res, _) => {
    rl.question(
      "What is your superpower? In a few words, tell us what you are amazing at!",
      (answer) => {
        //console.log(`Sports: ${answer}`);
        res(answer);
      }
    );
  });
};
const profile = async () => {
  const Ans1 = await question1();
  const Ans2 = await question2();
  const Ans3 = await question3();
  const Ans4 = await question4();
  const Ans5 = await question5();
  const Ans6 = await question6();
  const Ans7 = await question7();
  console.log(Ans1);
  console.log(Ans2);
  console.log(Ans3);
  console.log(Ans4);
  console.log(Ans5);
  console.log(Ans6);
  console.log(Ans7);
  rl.close();
};
profile();
