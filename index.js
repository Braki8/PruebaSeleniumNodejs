const fsp = require("fs");

const {Builder, By, Key, util, Browser} = require("selenium-webdriver");

describe("Iniciar sesion en la pagina de corotos",function(){
    it("Ingreso correctamente a la pagina de corotos",async function(){
        let driver = await new Builder().forBrowser(Browser.EDGE).build();
        await driver.get("https://www.corotos.com.do/");
       
        driver.takeScreenshot().then(
            function(image, err){
                fsp.writeFile('./image/captura1.png', image, 'base64', function(err){
                 console.log(err);
                });
            }
        )
    
       await driver.findElement(By.id("g4-taco-signin-button")).click();    
       
       driver.takeScreenshot().then(
        function(image, err){
            fsp.writeFile('./image/captura2.png', image, 'base64', function(err){
             console.log(err);
            });
        }
    )
    
       await driver.findElement(By.name("app_user[email]")).sendKeys("rodriguezabadbryan@gmail.com");
       driver.takeScreenshot().then(
        function(image, err){
            fsp.writeFile('./image/captura3.png', image, 'base64', function(err){
             console.log(err);
            });
        }
    )
       await driver.findElement(By.name("app_user[password]")).sendKeys("123456", Key.RETURN);
      
       driver.takeScreenshot().then(
        function(image, err){
            fsp.writeFile('./image/captura4.png', image, 'base64', function(err){
             console.log(err);
            });
        }
    )
       
       driver.quit();
    })
})

    
   
   



