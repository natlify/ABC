const fileStructure = {
    type: 'folder',
    size: 0,
    name: 'XYZ',
    files: [
        {
            type: 'file',
            size: 1500,
            name: 'test.txt',
            files: [],
        },
        {
            type: 'file',
            size: 1000,
            name: 'test2.txt',
            files: [],
        },
        {
            type: 'folder',
            size: 0,
            name: 'inner folder',
            files: [
                {
                    type: 'file',
                    size: 1500,
                    name: 'test.txt',
                    files: [],
                },
                {
                    type: 'file',
                    size: 1000,
                    name: 'test2.txt',
                    files: [],
                },
                {
                    type: 'folder',
                    size: 0,
                    name: 'inner folder',
                    files: [
                        {
                            type: 'file',
                            size: 500,
                            name: 'test3.txt',
                            files: [],
                        },
                    ],
                },
            ],
        },
    ],
}

// returns size of the entire fileStructure
const findSize = (fs) => {
    if (fs.type === 'file') return fs.size
    if (!fs.files?.length) return 0
    return fs.files.reduce((acc, obj) => acc + findSize(obj), 0)
}

try {
    console.log(findSize(fileStructure))
} catch (error) {
    console.log(error.message)
}

const workData = [
    {
        name: 'John',
        slots: ['10-12', '11-12', '14-16', '15-18'],
    },
    {
        name: 'Jane',
        slots: ['6-11', '12-15'],
    },
]

/**
 *  24 slots
 *  {
 *   0 : true
 *   1 : false,
 *   2 : false
 *   3: false
 *
 *   23 : true
 *  }
 */

// Table : Teach id, name,
/**
 * Student id, name
 * 10^6
 * Name like "%abc%"
 *
 * Teacher-Student
 *
 * Student Address
 *
 *
 */

/**
 * /:entity
 * GET /students/:id ; Fetching
 * POST /students ; creation
 *
 *  - 1st Student
 *      - insert Student Address along FK
 *          -
 *
 *
 *
 *
 * PUT /students/id
 * DELETE /students/id
 */
