import express from "express";
import bodyParser from "body-parser";

const app= express();
const port= 3000;

const recipeJSON =
        '[{"id":"001","type":"Accessory","name":"Thermal","Details":{"season1":{"WH_OnH":"3519","STR_OnH":"4002","TOT_STK":"7521","TOT_SAL":"2063","TOT_AMUT":"451719","YEAR":"2023"},"season2":{"WH_OnH":"31","STR_OnH":"201","TOT_STK":"232","TOT_SAL":"31","TOT_AMUT":"11708","YEAR":"2022"},"season3":{"WH_OnH":"0","STR_OnH":"0","TOT_STK":"0","TOT_SAL":"0","TOT_AMUT":"0","YEAR":"2021"},"season4":{"WH_OnH":"8","STR_OnH":"287","TOT_STK":"295","TOT_SAL":"5","TOT_AMUT":"17405","YEAR":"2020"},"season5":{"WH_OnH":"0","STR_OnH":"0","TOT_STK":"0","TOT_SAL":"0","TOT_AMUT":"0","YEAR":"2019"},"season6":{"WH_OnH":"0","STR_OnH":"0","TOT_STK":"0","TOT_SAL":"0","TOT_AMUT":"0","YEAR":"2018"}}},{"id":"002","type":"cloth","name":"Jacket","Details":{"season1":{"WH_OnH":"45","STR_OnH":"1104","TOT_STK":"1149","TOT_SAL":"8","TOT_AMUT":"343551","YEAR":"2024"},"season2":{"WH_OnH":"1261","STR_OnH":"2927","TOT_STK":"4188","TOT_SAL":"762","TOT_AMUT":"711172","YEAR":"2023"},"season3":{"WH_OnH":"1161","STR_OnH":"714","TOT_STK":"1875","TOT_SAL":"98","TOT_AMUT":"326475","YEAR":"2022"},"season4":{"WH_OnH":"1068","STR_OnH":"417","TOT_STK":"1485","TOT_SAL":"402","TOT_AMUT":"171075","YEAR":"2021"},"season5":{"WH_OnH":"45","STR_OnH":"50","TOT_STK":"95","TOT_SAL":"36","TOT_AMUT":"7095","YEAR":"2020"},"season6":{"WH_OnH":"10","STR_OnH":"133","TOT_STK":"143","TOT_SAL":"55","TOT_AMUT":"5671","YEAR":"2019"}}},{"id":"003","type":"cloth","name":"Overcoat","Details":{"season1":{"WH_OnH":"238","STR_OnH":"280","TOT_STK":"518","TOT_SAL":"8","TOT_AMUT":"206682","YEAR":"2024"},"season2":{"WH_OnH":"33","STR_OnH":"750","TOT_STK":"783","TOT_SAL":"124","TOT_AMUT":"312417","YEAR":"2023"},"season3":{"WH_OnH":"138","STR_OnH":"300","TOT_STK":"438","TOT_SAL":"71","TOT_AMUT":"127862","YEAR":"2022"},"season4":{"WH_OnH":"122","STR_OnH":"127","TOT_STK":"249","TOT_SAL":"81","TOT_AMUT":"49551","YEAR":"2021"},"season5":{"WH_OnH":"111","STR_OnH":"148","TOT_STK":"259","TOT_SAL":"13","TOT_AMUT":"38591","YEAR":"2020"},"season6":{"WH_OnH":"0","STR_OnH":"0","TOT_STK":"0","TOT_SAL":"0","TOT_AMUT":"0","YEAR":"2019"}}},{"id":"004","type":"cloth","name":"Vest","Details":{"season1":{"WH_OnH":"1447","STR_OnH":"3139","TOT_STK":"4586","TOT_SAL":"538","TOT_AMUT":"704904","YEAR":"2023"},"season2":{"WH_OnH":"534","STR_OnH":"157","TOT_STK":"691","TOT_SAL":"765","TOT_AMUT":"26949","YEAR":"2021"},"season3":{"WH_OnH":"0","STR_OnH":"90","TOT_STK":"90","TOT_SAL":"40","TOT_AMUT":"2250","YEAR":"2020"},"season4":{"WH_OnH":"0","STR_OnH":"0","TOT_STK":"0","TOT_SAL":"0","TOT_AMUT":"0","YEAR":"2019"},"season5":{"WH_OnH":"0","STR_OnH":"0","TOT_STK":"0","TOT_SAL":"0","TOT_AMUT":"0","YEAR":"2018"},"season6":{"WH_OnH":"0","STR_OnH":"0","TOT_STK":"0","TOT_SAL":"0","TOT_AMUT":"0","YEAR":"2017"}}},{"id":"005","type":"cloth","name":"Cardican","Details":{"season1":{"WH_OnH":"4914","STR_OnH":"1555","TOT_STK":"6469","TOT_SAL":"569","TOT_AMUT":"518531","YEAR":"2023"},"season2":{"WH_OnH":"728","STR_OnH":"101","TOT_STK":"829","TOT_SAL":"157","TOT_AMUT":"40621","YEAR":"2021"},"season3":{"WH_OnH":"653","STR_OnH":"93","TOT_STK":"746","TOT_SAL":"86","TOT_AMUT":"36554","YEAR":"2020"},"season4":{"WH_OnH":"270","STR_OnH":"102","TOT_STK":"372","TOT_SAL":"123","TOT_AMUT":"9300","YEAR":"2019"},"season5":{"WH_OnH":"870","STR_OnH":"466","TOT_STK":"1336","TOT_SAL":"59","TOT_AMUT":"38744","YEAR":"2018"},"season6":{"WH_OnH":"17","STR_OnH":"0","TOT_STK":"17","TOT_SAL":"0","TOT_AMUT":"493","YEAR":"2015"}}},{"id":"006","type":"cloth","name":"Pullover","Details":{"season1":{"WH_OnH":"2701","STR_OnH":"931","TOT_STK":"3632","TOT_SAL":"276","TOT_AMUT":"225948","YEAR":"2023"},"season2":{"WH_OnH":"2948","STR_OnH":"587","TOT_STK":"3535","TOT_SAL":"452","TOT_AMUT":"137865","YEAR":"2021"},"season3":{"WH_OnH":"348","STR_OnH":"81","TOT_STK":"429","TOT_SAL":"49","TOT_AMUT":"10725","YEAR":"2020"},"season4":{"WH_OnH":"686","STR_OnH":"319","TOT_STK":"1005","TOT_SAL":"477","TOT_AMUT":"25125","YEAR":"2019"},"season5":{"WH_OnH":"357","STR_OnH":"3","TOT_STK":"360","TOT_SAL":"1","TOT_AMUT":"6840","YEAR":"2018"},"season6":{"WH_OnH":"1","STR_OnH":"1","TOT_STK":"2","TOT_SAL":"1","TOT_AMUT":"38","YEAR":"2017"}}},{"id":"007","type":"cloth","name":"Blazer","Details":{"season1":{"WH_OnH":"205","STR_OnH":"1158","TOT_STK":"1363","TOT_SAL":"97","TOT_AMUT":"462627","YEAR":"2024"},"season2":{"WH_OnH":"1","STR_OnH":"651","TOT_STK":"652","TOT_SAL":"71","TOT_AMUT":"210518","YEAR":"2023"},"season3":{"WH_OnH":"0","STR_OnH":"48","TOT_STK":"48","TOT_SAL":"0","TOT_AMUT":"3600","YEAR":"2020"},"season4":{"WH_OnH":"2","STR_OnH":"17","TOT_STK":"19","TOT_SAL":"0","TOT_AMUT":"931","YEAR":"2019"},"season5":{"WH_OnH":"0","STR_OnH":"0","TOT_STK":"0","TOT_SAL":"0","TOT_AMUT":"0","YEAR":"2018"},"season6":{"WH_OnH":"0","STR_OnH":"0","TOT_STK":"0","TOT_SAL":"0","TOT_AMUT":"0","YEAR":"2017"}}},{"id":"008","type":"cloth","name":"SwitShirt","Details":{"season1":{"WH_OnH":"643","STR_OnH":"1104","TOT_STK":"1747","TOT_SAL":"53","TOT_AMUT":"172953","YEAR":"2023"},"season2":{"WH_OnH":"51","STR_OnH":"71","TOT_STK":"122","TOT_SAL":"18","TOT_AMUT":"5978","YEAR":"2022"},"season3":{"WH_OnH":"1257","STR_OnH":"2238","TOT_STK":"3495","TOT_SAL":"1659","TOT_AMUT":"147585","YEAR":"2021"},"season4":{"WH_OnH":"27","STR_OnH":"101","TOT_STK":"128","TOT_SAL":"93","TOT_AMUT":"3200","YEAR":"2020"},"season5":{"WH_OnH":"8","STR_OnH":"16","TOT_STK":"24","TOT_SAL":"14","TOT_AMUT":"360","YEAR":"2019"},"season6":{"WH_OnH":"494","STR_OnH":"307","TOT_STK":"801","TOT_SAL":"6","TOT_AMUT":"5927","YEAR":"2018"}}}]';
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let data;

app.get("/", (req, res) => {
    res.render("index.ejs", { recipe: data });
});

app.post("/recipe", (req, res) => {
    switch (req.body.choice) {
        case "Thermal":
            data = JSON.parse(recipeJSON)[0];
            break;
        case "Jacket":
            data = JSON.parse(recipeJSON)[1];
            break;
        case "Overcoat":
            data = JSON.parse(recipeJSON)[2];
            break;
        case "Vest":
            data = JSON.parse(recipeJSON)[3];
            break;
        case "Cardican":
            data = JSON.parse(recipeJSON)[4];
            break;
        case "Pullover":
            data = JSON.parse(recipeJSON)[5];
            break;
        case "Blazer":
            data = JSON.parse(recipeJSON)[6];
            break;
        case "SwitShirt":
            data = JSON.parse(recipeJSON)[7];
            break;
        default:
            break;
    }
        res.redirect("/");
    
});

app.listen(port, () => {
    console.log(`Server Running on port ${port}.`);
});