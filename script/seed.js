'use strict'

const db = require('../server/db')
const {User, Note, Food, Measurement, Daily} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'Beiatrix',
      lastName: 'Pedrasa',
      email: 'bpedrasa@gmail.com',
      photo:
        'https://lh3.googleusercontent.com/-_V0z9CJftzE/XANsaJhTT9I/AAAAAAAAFLE/592o5gXRXQoJkLh5QPtzdJmsu1Ca7NRnQCEwYBhgL/w280-h280-p/IMG_7509.JPG',
      password: '123'
    }),
    User.create({
      firstName: 'Cody',
      lastName: 'Pug',
      photo:
        'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
      email: 'cody@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Murphy',
      lastName: 'Mullaly',
      email: 'murphy@email.com',
      photo:
        'https://images.unsplash.com/photo-1537151672256-6caf2e9f8c95?ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
      password: '123'
    })
  ])

  const measurements = await Promise.all([
    // ========== 2018 ==========
    // 01/01
    Measurement.create({
      category: 'weight',
      data: 116.2,
      createdAt: '2018-01-01 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 28.75,
      createdAt: '2018-01-01 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 33.5,
      createdAt: '2018-01-01 23:20:30.847-05',
      userId: 1
    }),
    // 01/02
    Measurement.create({
      category: 'weight',
      data: 115.8,
      createdAt: '2018-01-02 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 28.75,
      createdAt: '2018-01-02 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 33.5,
      createdAt: '2018-01-02 23:20:30.847-05',
      userId: 1
    }),
    // 01/03
    Measurement.create({
      category: 'weight',
      data: 114,
      createdAt: '2018-01-03 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 29,
      createdAt: '2018-01-03 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 32.75,
      createdAt: '2018-01-03 23:20:30.847-05',
      userId: 1
    }),
    // 01/04
    Measurement.create({
      category: 'weight',
      data: 114.6,
      createdAt: '2018-01-04 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 28.25,
      createdAt: '2018-01-04 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 32.5,
      createdAt: '2018-01-04 23:20:30.847-05',
      userId: 1
    }),
    // 01/05
    Measurement.create({
      category: 'weight',
      data: 113.8,
      createdAt: '2018-01-05 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 28,
      createdAt: '2018-01-05 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31.5,
      createdAt: '2018-01-05 23:20:30.847-05',
      userId: 1
    }),
    // 01/06
    Measurement.create({
      category: 'weight',
      data: 114.8,
      createdAt: '2018-01-06 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 28,
      createdAt: '2018-01-06 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31.75,
      createdAt: '2018-01-06 23:20:30.847-05',
      userId: 1
    }),
    // 01/07
    Measurement.create({
      category: 'weight',
      data: 114.8,
      createdAt: '2018-01-07 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 28,
      createdAt: '2018-01-07 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 32.5,
      createdAt: '2018-01-07 23:20:30.847-05',
      userId: 1
    }),
    // 01/08
    Measurement.create({
      category: 'weight',
      data: 114,
      createdAt: '2018-01-08 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27.75,
      createdAt: '2018-01-08 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31.5,
      createdAt: '2018-01-08 23:20:30.847-05',
      userId: 1
    }),
    // 01/16
    Measurement.create({
      category: 'weight',
      data: 113.6,
      createdAt: '2018-01-16 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 28,
      createdAt: '2018-01-16 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31.25,
      createdAt: '2018-01-16 23:20:30.847-05',
      userId: 1
    }),
    // 01/19
    Measurement.create({
      category: 'weight',
      data: 114.8,
      createdAt: '2018-01-19 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 28,
      createdAt: '2018-01-19 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31.75,
      createdAt: '2018-01-19 23:20:30.847-05',
      userId: 1
    }),
    // 02/02
    Measurement.create({
      category: 'weight',
      data: 109.4,
      createdAt: '2018-02-02 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27,
      createdAt: '2018-02-02 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30.25,
      createdAt: '2018-02-02 23:20:30.847-05',
      userId: 1
    }),
    // 03/02
    Measurement.create({
      category: 'weight',
      data: 108.2,
      createdAt: '2018-03-02 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27.25,
      createdAt: '2018-03-02 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30.5,
      createdAt: '2018-03-02 23:20:30.847-05',
      userId: 1
    }),
    // 03/03
    Measurement.create({
      category: 'weight',
      data: 107.4,
      createdAt: '2018-03-03 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27,
      createdAt: '2018-03-03 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 29.5,
      createdAt: '2018-03-03 23:20:30.847-05',
      userId: 1
    }),
    // 03/04
    Measurement.create({
      category: 'weight',
      data: 108.2,
      createdAt: '2018-03-04 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27,
      createdAt: '2018-03-04 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30,
      createdAt: '2018-03-04 23:20:30.847-05',
      userId: 1
    }),
    // 03/05
    Measurement.create({
      category: 'weight',
      data: 109.2,
      createdAt: '2018-03-05 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27,
      createdAt: '2018-03-05 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30,
      createdAt: '2018-03-05 23:20:30.847-05',
      userId: 1
    }),
    // 03/06
    Measurement.create({
      category: 'weight',
      data: 108,
      createdAt: '2018-03-06 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 26.75,
      createdAt: '2018-03-06 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 29.25,
      createdAt: '2018-03-06 23:20:30.847-05',
      userId: 1
    }),
    // 03/07
    Measurement.create({
      category: 'weight',
      data: 107.4,
      createdAt: '2018-03-07 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 26.5,
      createdAt: '2018-03-07 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 29,
      createdAt: '2018-03-07 23:20:30.847-05',
      userId: 1
    }),
    // 03/08
    Measurement.create({
      category: 'weight',
      data: 107.6,
      createdAt: '2018-03-08 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27,
      createdAt: '2018-03-08 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 29.5,
      createdAt: '2018-03-08 23:20:30.847-05',
      userId: 1
    }),
    // 03/09
    Measurement.create({
      category: 'weight',
      data: 109,
      createdAt: '2018-03-09 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27,
      createdAt: '2018-03-09 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30,
      createdAt: '2018-03-09 23:20:30.847-05',
      userId: 1
    }),
    // 03/10
    Measurement.create({
      category: 'weight',
      data: 106.8,
      createdAt: '2018-03-10 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 26.75,
      createdAt: '2018-03-10 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 29.75,
      createdAt: '2018-03-10 23:20:30.847-05',
      userId: 1
    }),
    // 03/11
    Measurement.create({
      category: 'weight',
      data: 106.8,
      createdAt: '2018-03-11 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 26.5,
      createdAt: '2018-03-11 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 29,
      createdAt: '2018-03-11 23:20:30.847-05',
      userId: 1
    }),
    // 03/12
    Measurement.create({
      category: 'weight',
      data: 107.4,
      createdAt: '2018-03-12 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27,
      createdAt: '2018-03-12 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 29,
      createdAt: '2018-03-12 23:20:30.847-05',
      userId: 1
    }),
    // 03/13
    Measurement.create({
      category: 'weight',
      data: 109.8,
      createdAt: '2018-03-13 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27,
      createdAt: '2018-03-13 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31.25,
      createdAt: '2018-03-13 23:20:30.847-05',
      userId: 1
    }),
    // 03/14
    Measurement.create({
      category: 'weight',
      data: 108,
      createdAt: '2018-03-14 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27,
      createdAt: '2018-03-14 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30.5,
      createdAt: '2018-03-14 23:20:30.847-05',
      userId: 1
    }),
    // 03/15
    Measurement.create({
      category: 'weight',
      data: 108.2,
      createdAt: '2018-03-15 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27,
      createdAt: '2018-03-15 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30.25,
      createdAt: '2018-03-15 23:20:30.847-05',
      userId: 1
    }),
    // 03/16
    Measurement.create({
      category: 'weight',
      data: 107.2,
      createdAt: '2018-03-16 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27,
      createdAt: '2018-03-16 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30,
      createdAt: '2018-03-16 23:20:30.847-05',
      userId: 1
    }),
    // 03/17
    Measurement.create({
      category: 'weight',
      data: 105.6,
      createdAt: '2018-03-17 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 26.75,
      createdAt: '2018-03-17 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30.5,
      createdAt: '2018-03-17 23:20:30.847-05',
      userId: 1
    }),
    // 03/18
    Measurement.create({
      category: 'weight',
      data: 106,
      createdAt: '2018-03-18 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 26.75,
      createdAt: '2018-03-18 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30.75,
      createdAt: '2018-03-18 23:20:30.847-05',
      userId: 1
    }),
    // 03/19
    Measurement.create({
      category: 'weight',
      data: 105.6,
      createdAt: '2018-03-19 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27,
      createdAt: '2018-03-19 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 29.75,
      createdAt: '2018-03-19 23:20:30.847-05',
      userId: 1
    }),
    // 03/20
    Measurement.create({
      category: 'weight',
      data: 106.8,
      createdAt: '2018-03-20 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 26.75,
      createdAt: '2018-03-20 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30.5,
      createdAt: '2018-03-20 23:20:30.847-05',
      userId: 1
    }),
    // 03/21
    Measurement.create({
      category: 'weight',
      data: 107.6,
      createdAt: '2018-03-21 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27,
      createdAt: '2018-03-21 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30.5,
      createdAt: '2018-03-21 23:20:30.847-05',
      userId: 1
    }),
    // 03/22
    Measurement.create({
      category: 'weight',
      data: 106.8,
      createdAt: '2018-03-22 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 26.75,
      createdAt: '2018-03-22 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 29.5,
      createdAt: '2018-03-22 23:20:30.847-05',
      userId: 1
    }),
    // 03/23
    Measurement.create({
      category: 'weight',
      data: 105.6,
      createdAt: '2018-03-23 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 26.5,
      createdAt: '2018-03-23 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30.25,
      createdAt: '2018-03-23 23:20:30.847-05',
      userId: 1
    }),
    // 05/23
    Measurement.create({
      category: 'weight',
      data: 110.6,
      createdAt: '2018-05-23 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 29,
      createdAt: '2018-05-23 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31.5,
      createdAt: '2018-05-23 23:20:30.847-05',
      userId: 1
    }),
    // 05/25
    Measurement.create({
      category: 'weight',
      data: 110.8,
      createdAt: '2018-05-25 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27.75,
      createdAt: '2018-05-25 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31.5,
      createdAt: '2018-05-25 23:20:30.847-05',
      userId: 1
    }),
    // 05/27
    Measurement.create({
      category: 'weight',
      data: 110.4,
      createdAt: '2018-05-27 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 28,
      createdAt: '2018-05-27 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31,
      createdAt: '2018-05-27 23:20:30.847-05',
      userId: 1
    }),
    // 06/26
    Measurement.create({
      category: 'weight',
      data: 111.6,
      createdAt: '2018-06-26 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 28,
      createdAt: '2018-06-26 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31.5,
      createdAt: '2018-06-26 23:20:30.847-05',
      userId: 1
    }),
    // 06/27
    Measurement.create({
      category: 'weight',
      data: 107,
      createdAt: '2018-06-27 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27,
      createdAt: '2018-06-27 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30.5,
      createdAt: '2018-06-27 23:20:30.847-05',
      userId: 1
    }),
    // 06/28
    Measurement.create({
      category: 'weight',
      data: 105.8,
      createdAt: '2018-06-28 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 26.5,
      createdAt: '2018-06-28 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 29,
      createdAt: '2018-06-28 23:20:30.847-05',
      userId: 1
    }),
    // 06/29
    Measurement.create({
      category: 'weight',
      data: 106,
      createdAt: '2018-06-29 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27,
      createdAt: '2018-06-29 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30.5,
      createdAt: '2018-06-29 23:20:30.847-05',
      userId: 1
    }),
    // 06/30
    Measurement.create({
      category: 'weight',
      data: 105.8,
      createdAt: '2018-06-30 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 26.75,
      createdAt: '2018-06-30 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 29.75,
      createdAt: '2018-06-30 23:20:30.847-05',
      userId: 1
    }),
    // 07/01
    Measurement.create({
      category: 'weight',
      data: 105.8,
      createdAt: '2018-07-01 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 26.5,
      createdAt: '2018-07-01 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30,
      createdAt: '2018-07-01 23:20:30.847-05',
      userId: 1
    }),
    // 07/03
    Measurement.create({
      category: 'weight',
      data: 106.2,
      createdAt: '2018-07-03 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 26.75,
      createdAt: '2018-07-03 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30,
      createdAt: '2018-07-03 23:20:30.847-05',
      userId: 1
    }),
    // 07/05
    Measurement.create({
      category: 'weight',
      data: 105,
      createdAt: '2018-07-05 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 26.75,
      createdAt: '2018-07-05 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 29.75,
      createdAt: '2018-07-05 23:20:30.847-05',
      userId: 1
    }),
    // 07/13
    Measurement.create({
      category: 'weight',
      data: 104,
      createdAt: '2018-07-13 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 26.5,
      createdAt: '2018-07-13 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 29.75,
      createdAt: '2018-07-13 23:20:30.847-05',
      userId: 1
    }),
    // 07/14
    Measurement.create({
      category: 'weight',
      data: 103.6,
      createdAt: '2018-07-14 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 26.25,
      createdAt: '2018-07-14 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 29.75,
      createdAt: '2018-07-14 23:20:30.847-05',
      userId: 1
    }),
    // 08/04
    Measurement.create({
      category: 'weight',
      data: 104.4,
      createdAt: '2018-08-04 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 26.5,
      createdAt: '2018-08-04 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30.5,
      createdAt: '2018-08-04 23:20:30.847-05',
      userId: 1
    }),
    // 11/10
    Measurement.create({
      category: 'weight',
      data: 112.6,
      createdAt: '2018-11-10 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 28,
      createdAt: '2018-11-10 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 32,
      createdAt: '2018-11-10 23:20:30.847-05',
      userId: 1
    }),
    // 11/18
    Measurement.create({
      category: 'weight',
      data: 108.4,
      createdAt: '2018-11-18 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27.75,
      createdAt: '2018-11-18 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31.5,
      createdAt: '2018-11-18 23:20:30.847-05',
      userId: 1
    }),
    // 12/14
    Measurement.create({
      category: 'weight',
      data: 111.8,
      createdAt: '2018-12-14 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 29.75,
      createdAt: '2018-12-14 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 32.75,
      createdAt: '2018-12-14 23:20:30.847-05',
      userId: 1
    }),
    // 12/15
    Measurement.create({
      category: 'weight',
      data: 110.2,
      createdAt: '2018-12-15 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27.75,
      createdAt: '2018-12-15 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 32.5,
      createdAt: '2018-12-15 23:20:30.847-05',
      userId: 1
    }),
    // 12/16
    Measurement.create({
      category: 'weight',
      data: 111.2,
      createdAt: '2018-12-16 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 28,
      createdAt: '2018-12-16 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 32,
      createdAt: '2018-12-16 23:20:30.847-05',
      userId: 1
    }),
    // 12/17
    Measurement.create({
      category: 'weight',
      data: 109.8,
      createdAt: '2018-12-17 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27.75,
      createdAt: '2018-12-17 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 32.35,
      createdAt: '2018-12-17 23:20:30.847-05',
      userId: 1
    }),
    // 12/18
    Measurement.create({
      category: 'weight',
      data: 109.8,
      createdAt: '2018-12-19 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 28,
      createdAt: '2018-12-19 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 32,
      createdAt: '2018-12-19 23:20:30.847-05',
      userId: 1
    }),
    // 12/19
    Measurement.create({
      category: 'weight',
      data: 110.8,
      createdAt: '2018-12-19 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 28.5,
      createdAt: '2018-12-19 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 32,
      createdAt: '2018-12-19 23:20:30.847-05',
      userId: 1
    }),
    // 12/20
    Measurement.create({
      category: 'weight',
      data: 111.6,
      createdAt: '2018-12-20 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 28.5,
      createdAt: '2018-12-20 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 32.5,
      createdAt: '2018-12-20 23:20:30.847-05',
      userId: 1
    }),
    // 12/21
    Measurement.create({
      category: 'weight',
      data: 111.6,
      createdAt: '2018-12-21 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 28,
      createdAt: '2018-12-21 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 32,
      createdAt: '2018-12-21 23:20:30.847-05',
      userId: 1
    }),
    // 12/22
    Measurement.create({
      category: 'weight',
      data: 110,
      createdAt: '2018-12-22 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 28,
      createdAt: '2018-12-22 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31.25,
      createdAt: '2018-12-22 23:20:30.847-05',
      userId: 1
    }),
    // 12/23
    Measurement.create({
      category: 'weight',
      data: 111.4,
      createdAt: '2018-12-23 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 28,
      createdAt: '2018-12-23 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31.25,
      createdAt: '2018-12-23 23:20:30.847-05',
      userId: 1
    }),
    // 12/24
    Measurement.create({
      category: 'weight',
      data: 109.8,
      createdAt: '2018-12-24 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27.75,
      createdAt: '2018-12-24 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31.25,
      createdAt: '2018-12-24 23:20:30.847-05',
      userId: 1
    }),
    // 12/25
    Measurement.create({
      category: 'weight',
      data: 111.2,
      createdAt: '2018-12-25 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 28,
      createdAt: '2018-12-25 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30.5,
      createdAt: '2018-12-25 23:20:30.847-05',
      userId: 1
    }),
    // 12/26
    Measurement.create({
      category: 'weight',
      data: 112.2,
      createdAt: '2018-12-26 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27.75,
      createdAt: '2018-12-26 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31.5,
      createdAt: '2018-12-26 23:20:30.847-05',
      userId: 1
    }),
    // 12/27
    Measurement.create({
      category: 'weight',
      data: 111.2,
      createdAt: '2018-12-27 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27.75,
      createdAt: '2018-12-27 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31.5,
      createdAt: '2018-12-27 23:20:30.847-05',
      userId: 1
    }),
    // 12/28
    Measurement.create({
      category: 'weight',
      data: 109.4,
      createdAt: '2018-12-28 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27.5,
      createdAt: '2018-12-28 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31.25,
      createdAt: '2018-12-28 23:20:30.847-05',
      userId: 1
    }),
    // 12/29
    Measurement.create({
      category: 'weight',
      data: 107.4,
      createdAt: '2018-12-29 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27.5,
      createdAt: '2018-12-29 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30,
      createdAt: '2018-12-29 23:20:30.847-05',
      userId: 1
    }),
    // 12/30
    Measurement.create({
      category: 'weight',
      data: 108.6,
      createdAt: '2018-12-30 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27.25,
      createdAt: '2018-12-30 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31,
      createdAt: '2018-12-30 23:20:30.847-05',
      userId: 1
    }),
    // ========== 2019 ==========
    //1/2
    Measurement.create({
      category: 'weight',
      data: 110.6,
      createdAt: '2019-01-02 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27.75,
      createdAt: '2019-01-02 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31,
      createdAt: '2019-01-02 23:20:30.847-05',
      userId: 1
    }),
    //1/4
    Measurement.create({
      category: 'weight',
      data: 109.6,
      createdAt: '2019-01-04 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27.75,
      createdAt: '2019-01-04 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31,
      createdAt: '2019-01-04 23:20:30.847-05',
      userId: 1
    }),
    //1/5
    Measurement.create({
      category: 'weight',
      data: 109.6,
      createdAt: '2019-01-05 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27.5,
      createdAt: '2019-01-05 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31,
      createdAt: '2019-01-05 23:20:30.847-05',
      userId: 1
    }),
    //1/6
    Measurement.create({
      category: 'weight',
      data: 109.6,
      createdAt: '2019-01-06 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27.5,
      createdAt: '2019-01-06 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30.75,
      createdAt: '2019-01-06 23:20:30.847-05',
      userId: 1
    }),
    //1/7
    Measurement.create({
      category: 'weight',
      data: 111.2,
      createdAt: '2019-01-07 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27.75,
      createdAt: '2019-01-07 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31.5,
      createdAt: '2019-01-07 23:20:30.847-05',
      userId: 1
    }),
    //1/10
    Measurement.create({
      category: 'weight',
      data: 109.2,
      createdAt: '2019-01-10 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27.75,
      createdAt: '2019-01-10 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 31.5,
      createdAt: '2019-01-10 23:20:30.847-05',
      userId: 1
    }),
    //1/19
    Measurement.create({
      category: 'weight',
      data: 108.2,
      createdAt: '2019-01-19 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'waist',
      data: 27.5,
      createdAt: '2019-01-19 23:20:30.847-05',
      userId: 1
    }),
    Measurement.create({
      category: 'lower abs',
      data: 30.75,
      createdAt: '2019-01-19 23:20:30.847-05',
      userId: 1
    })
  ])

  const foods = await Promise.all([
    Food.create({
      name: 'oatmeal',
      healthy: true,
      userId: 1
    }),
    Food.create({
      name: 'pizza',
      healthy: false,
      userId: 1
    }),
    Food.create({
      name: 'smoothie',
      healthy: true,
      userId: 1
    }),
    Food.create({
      name: 'acai bowl',
      healthy: true,
      userId: 1
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${measurements.length} measurements`)
  console.log(`seeded ${foods.length} foods`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
