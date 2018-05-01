const { db, Gardener, Plot, Vegetable } = require('./model');

db
  .sync({ force: true })
  .then(() => {
    console.log('sync is successful');
    seedStarter();
  })
  .then(() => {
    console.log('Second Then is here...');
    // db.close();
  })
  .catch(err => {
    console.error(err.message);
    db.close();
  });

function seedVeg(vegName, vegColor){
  Vegetable.create({ name: vegName, color: vegColor });
  return new Promise(function(resolve, reject){
    resolve('veg insert done');
  });
}

function seedPlot(plotSize, plotShaded){
  Plot.create({ size: plotSize, shaded: plotShaded });
  return new Promise(function(resolve, reject){
    resolve('plot insert done');
  });
}

function seedGardener(gardenerName, gardenerAge){
  Gardener.create({ name: gardenerName, age: gardenerAge });
  return new Promise(function(resolve, reject){
    resolve('gardener insert done');
  });
}

function seedStarter(){
  let vegName1, vegName2, vegName3, vegName4, vegName5;
  let value = null;
  let plot1, plot2, plot3;

  vegName1 = seedVeg('Tomato','red');
  vegName2 = seedVeg('Green Bean','green');
  vegName3 = seedVeg('Broccoli','green');
  vegName4 = seedVeg('Cauliflower','white');
  vegName5 = seedVeg('Sweet Pepper','yellow');
  
  value = Promise.all([vegName1, vegName2, vegName3, vegName4, vegName5])
  .then(() => {
    console.log('We are done with Vegetable seeding')
  })
  .catch((e) => {
    console.log ('Vegetable loading error');
  });


  plot1 = seedPlot(25, true);
  plot2 = seedPlot(80, true);
  plot3 = seedPlot(399, true);

  value = Promise.all([plot1,plot2,plot3])
  .then(() => {
    console.log('We are done with Plot seeding')
  })
  .catch((e) => {
    console.log ('PLot loading error');
  });

}