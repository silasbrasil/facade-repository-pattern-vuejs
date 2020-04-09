import UrlBuilder from '@/repositories/http/helpers/url-builder'
import NiduuHttp from '@/repositories/http/http'
import MaterialRepository from '@/repositories/api/materials/material-repository'

import HeaderBuilderMock from '../../../../__mock__/__header-builder__'

const company = { id: 1 }
const niduuNiduu = new NiduuHttp(UrlBuilder, HeaderBuilderMock)
const respoitory = new MaterialRepository(niduuNiduu, company)

describe('Materials Repository',  () => {

  it('getAll', async () => {
    const response = await respoitory.getAll()
  })
})
