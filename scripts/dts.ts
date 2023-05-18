import { join } from 'path'
import { existsSync, mkdirSync, copy, removeSync } from 'fs-extra'

const CWD = process.cwd()
const TYPES = join(CWD, './types')

if (existsSync(TYPES)) {
  removeSync(TYPES)
}

mkdirSync(TYPES)

copy(`${CWD}/src`, TYPES, {
  filter: (f) => {
    if (f.includes('.') && f.includes('.d.ts')) {
      return true
    }
    if (f.includes('.') && !f.includes('.d.ts')) {
      return false
    }
    if (/example|utils|style|types/g.test(f)) {
      return false
    }
    return true
  },
})
