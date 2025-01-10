import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Xperience from '../Xperience.vue'


const testperience = {
  "startDate": "03/2008",
  "endDate": "11/2014",
  "title": "Biología/Ciencias biológicas",
  "description": "Licenciatura",
  "location":
  {
    "at": "Universidad de Buenos Aires",
    "city": "Buenos Aires",
    "country": "Argentina"
  }
}

describe('Xperience', () => {
  it('renders properly', () => {
    const wrapper = mount(Xperience, { props: { xperience: testperience } })
    expect(wrapper.text()).toContain("Licenciatura")
  })
})
