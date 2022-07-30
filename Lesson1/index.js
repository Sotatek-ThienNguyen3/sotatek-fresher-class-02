const main = async () => {

  // for (let i = 0; i < 10; i++) {
  //   // push to Timer
  //   setTimeout(() => {
  //     console.log('i', i)
  //     // let i => console.log(i, 0) console.log(i, 1) ...
  //     // var i => console.log(i, &i) console.log(i, &i) ...
  //   }, i * 1000);
  // }


  let x1 = {
    key1: 'value1',
    key2: 'value2',
    obj: {
      key3: '3',
      key4: '4'
    }
  }

  console.log('x1', x1)

  x1.key1 = 10
  console.log('x1', x1)


  let x2 = x1

  x1.key1 = 100
  x2.key1 = 200


  console.log('x2', x2)
  x1.obj.key3 = 'xx'
  console.log('x2', x2)

  // shallow copy - deep copy 

  const x = [1, 2, 3, 4] // map filter forEach reduce

  // y = f(x) = x^2+1

  Promise
    .all(x.map(async e => e * e + 1))
    .then(y => {
      console.log('y', y)
    })

  const y = await Promise.all(x.map(async e => e * e + 1))

  console.log('x', x)
  console.log('y', x)

  const mapData = []
  const filterData = []

  for (let i = 0; i < x.length; i++) {
    mapData.push(x[i] * x[i] + 1)
    if (x[i] % 2 == 0) {
      filterData.push(x[i])
    }
  }

  console.log('mapData', mapData)
  console.log('filterData', filterData)

  x.filter(e => e % 2 == 0)

  const reduceValue = x.reduce((a, b) => a + b)
  console.log('reduceValue', reduceValue)



  let reduceValue2 = 0
  let previous = 0;

  for (let i = 0; i < x.length; i++) {
    let current = x[i];
    previous = previous + current;
  }

  reduceValue2 = previous


  const sleep = async (x) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(x)
      }, x * 1000);
    })
  }

  // console.log('Start sleep')
  // await sleep(5)
  // console.log('Awake')

  const promise1 = new Promise((resolve, reject) => {
    sleep(3).then(() => {
      resolve(1)
    })
    // reject(2)
  })

  const promise2 = new Promise((resolve, reject) => {
    resolve(2)
    // reject(2)
  })

  let dataReturnFromPromise1;

  // promise1
  //   .then(data => {
  //     console.log('data', data)
  //     dataReturnFromPromise1 = data

  //     promise2.then(data2 => {
  //       // can du lieu cua promise1 
  //       console.log('data2', data2)
  //       console.log('dataReturnFromPromise1', dataReturnFromPromise1)
  //     })
  //   })
  //   .catch(err => {
  //     console.log('err', err)
  //   })


  const awaitDataReturnFromPromise1 = await promise1
  console.log('awaitDataReturnFromPromise1', awaitDataReturnFromPromise1)
  const awaitDataReturnFromPromise2 = await promise2


  const temp = () => {
    console.log('func1')
    console.log('this', this)
  }

  const temp2 = function () {
    console.log('func2')
    console.log('this', this)
  }

  const objfuncs = {
    func1: temp,
    func2: temp2
  }

  objfuncs.func1()
  objfuncs.func2()

  // do not use promise all

  await sleep(1)
  await sleep(1)
  await sleep(1)
  await sleep(1)
  await sleep(1)


  // use promise all
  await
    Promise.all(
      [
        sleep(1),
        sleep(1),
        sleep(1),
        sleep(1),
        sleep(1)
      ])

  // => which faster? 
}

main().then().catch()