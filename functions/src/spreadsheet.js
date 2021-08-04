const credenciales = require('./json/rujan2-f97d69b87bae.json')

let googleId = '1Q1TI1NM0bvrjaDnXjpNlkM_hXojciBwXnzUe2QMqbC4'
let id2 = '1u5ww-eDMlciXK-62fu3xS4G6k7e50S-Q9_YZusRQdCo'
let id3 = '1fVjCiimKP4AVr1S6TeiBnAomCEQ54f82rydnoHEmTaI'

async function accederGoogle() {
  const documento = new GoogleSpreadsheet(googleId)
  await documento.useServiceAccountAuth(credenciales)
  try {
    console.log('esta el doc')
  } catch (e) {
    console.error('error en get doc')
  } finally {
    console.log('recibo info doc')

    await documento.loadInfo()
    try {
      console.log('esta el doc y su info')
    } catch (e) {
      console.error('error en get info doc')
    } finally {
      console.log('agarro la sheet')
      // await documento.updateProperties({ title: 'renamed doc' })
      const cantSheets = Object.keys(documento._rawSheets).length
      console.log(cantSheets)

      for (let i = 1; i < 2; i++) {
        // setDelay(i * i + 2)
        var sheet = documento.sheetsByIndex[i]
        var hoja = sheet._rawProperties.title
        // console.log(hoja)
        let rows2 = async () => {
          var response = await sheet.getRows()
          return response
        }
        let rows = await rows2()
        let cantRows = Object.keys(rows).length
        // console.log(cantRows)
        // console.log(sheet.columnCount)
        // console.log(sheet.headerValues.length)

        // pido los headersValues y comparo si incluye esta fecha o tiene fecha ant

        // let cantRows = Object.keys(rows).length
        // console.log(cantRows)
        // console.log(sheet.columnCount)
        // console.log(sheet.headerValues.length)

        // pido los headersValues y comparo si incluye esta fecha o tiene fecha ant

        var rowsValues = await sheet.headerValues
        try {
          console.log('tengo headers')
        } catch (e) {
          console.error(e)
        } finally {
          console.log('trabajo con headers')

          console.log(rowsValues)

          // console.log(dateTodayString)
          if (rowsValues != '') {
            console.log('tiene header')
            // si incluye la fecha de hoy convierto los rows
            console.log('empieza hoja de ' + hoja)
            await convertirValores(sheet, rowsValues)
          } else {
            // si existe una fecha anterior no hago nada
            existeFechaAnt = false
            rowsValues.forEach((element) => {
              if (element.includes('/')) {
                existeFechaAnt = true
                console.log('ya existe una conversión para esta hoja')
              }
            })

            if (!existeFechaAnt) {
              rowsValues.push(dateTodayString)
              rowsValues.includes('base') ? null : rowsValues.push('base')

              sheet.setHeaderRow(rowsValues)
              console.log('empieza hoja' + i)
              await convertirValores(sheet, rowsValues)

              // sino (no existe conversion)
            }
          }
        }
      }
    }
  }
}

async function convertirValores(sheet, rowsValues) {
  console.log('convertir valores')
  var redSocial = sheet._rawProperties.title
  const rows = await sheet.getRows()
  let elements = []
  rowsValues.forEach((element) => {
    if (element.includes('/')) {
      elements.push(element)
    }
  })
  try {
    console.log(rows.length)
  } catch (e) {
    console.error('error get fila')
  } finally {
    console.log('Get fila ok')

    for (let i = 0; i < rows.length; i++) {
      setDelay(i + i)
      let account = rows[i].Account
      // setDelay(i)
      // determinar conversion
      if (account != '') {
        console.log('Fila nro ' + i + '. Account name: ' + account)
        await accederGoogle2(rows[i], elements, account, redSocial)
        // await accederGoogle2(rows[i])
      }

      // console.log(element)
      // console.log(redSocial)
    }
  }
}

async function accederGoogle2(rows1, elements, account, redSocial) {
  const document = new GoogleSpreadsheet(id3)
  await document.useServiceAccountAuth(credenciales)
  try {
    console.log('esta el doc')
  } catch (e) {
    console.error('error en get doc')
  } finally {
    console.log('recibo info doc')

    await document.loadInfo()
    try {
      console.log('esta el doc y su info')
    } catch (e) {
      console.error('error en get info doc')
    } finally {
      console.log('agarro la sheet')
      // await document.updateProperties({ title: 'renamed doc' })
      const cantSheets = Object.keys(document._rawSheets).length
      console.log(cantSheets)

      // for (let i = 0; i < cantSheets; i++) {
      // setDelay(i * i + 2)
      var sheet2 = document.sheetsByIndex[0]

      // let rows2 = async () => {
      //   var response = await sheet2.getRows()
      //   return response
      // }
      // var rows3 = await rows2()
      // let cantRows = Object.keys(rows3).length
      // console.log(cantRows)
      // console.log(rows3)
      // console.log(sheet.columnCount)
      // console.log(sheet.headerValues.length)

      // pido los headersValues y comparo si incluye esta fecha o tiene fecha ant

      // let cantRows = Object.keys(rows).length
      // console.log(cantRows)
      // console.log(sheet.columnCount)
      // console.log(sheet.headerValues.length)

      // pido los headersValues y comparo si incluye esta fecha o tiene fecha ant

      var rowsValues = await sheet2.headerValues
      try {
        console.log('tengo headers')
        // console.log(cantRows)
      } catch (e) {
        console.error(e)
      } finally {
        console.log('yes')
        var j = 0
        var titleHeader = {}
        titleHeader.title = account
        if (redSocial == 'Instagram') {
          titleHeader.headerValues = [
            'date',
            'full_name',
            'followers',
            'following',
            'profile_pic_url',
          ]
        }
        if (redSocial == 'Tiktok') {
          titleHeader.headerValues = [
            'date',
            'full_name',
            'followers',
            'following',
            'heartCount',
            'videoCount',
            'avatar',
          ]
        }
        var newSheet = await document.addSheet(titleHeader)
        try {
          console.log('agregando sheet')
        } catch (e) {
          console.log(e)
        } finally {
          console.log('agregue sheet')

          for (let i = 0; i < elements.length; i++) {
            setDelay(i)
            let obj = {}
            obj.date = elements[i]
            obj.followers = rows1[elements[i]]
            await newSheet.addRow(obj)
            try {
              console.log('agregando row')
            } catch (e) {
              console.log(e)
            } finally {
              console.log('agregueRow')
            }
            // rows3[i].Fecha = elements[i]
            // rows3[i].FollowersInsta = rows1[elements[i]]
            // // console.log(rows1[element])
            // await rows3[i].save()
            // try {
            //   console.log('guardando')
            // } catch (e) {
            //   console.error(e)
            // } finally {
            //   console.log('guardado')
            // }
          }
        }
        //       console.log(rowsValues)

        //       // console.log(dateTodayString)
        //       if (rowsValues != '') {
        //         console.log('tiene header')
        //         // si incluye la fecha de hoy convierto los rows
        //         console.log('empieza hoja de ' + hoja)
        //         await convertirValores(sheet)
        //       } else {
        //         // si existe una fecha anterior no hago nada
        //         existeFechaAnt = false
        //         rowsValues.forEach((element) => {
        //           if (element.includes('/')) {
        //             existeFechaAnt = true
        //             console.log('ya existe una conversión para esta hoja')
        //           }
        //         })

        //         if (!existeFechaAnt) {
        //           rowsValues.push(dateTodayString)
        //           rowsValues.includes('base') ? null : rowsValues.push('base')

        //           sheet.setHeaderRow(rowsValues)
        //           console.log('empieza hoja' + i)
        //           await convertirValores(sheet)

        //           // sino (no existe conversion)
        //         }
        //       }
      }
    }
  }
}

// accederGoogle()

function setDelay(i) {
  setTimeout(function () {}, 1000 * i)
}

module.exports = {
  accederGoogle: accederGoogle,
}
