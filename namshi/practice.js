var assert = require('assert')

class Graph {
    constructor(type) {
        this.vertices = []
        this.adjacencyList = {}
        this.graphType = type || 'DIRECTED'
    }

    addVertex(vertex) {
        this.vertices.push(vertex)
        this.adjacencyList[vertex] = {}
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1][vertex2] = weight
        if (this.graphType === 'UNDIRECTED') {
            this.adjacencyList[vertex2][vertex1] = weight
        }
    }

    changeWeight(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1][vertex2] = weight
    }

    printGraph() {
        console.log(JSON.stringify(this.adjacencyList, null, 4))
    }
    shortestPath(source, destination) {
        let distances = {},
            parents = {},
            visited = new Set()
        let totalDistance = Infinity

        // initialise
        this.vertices.map((vertex) => {
            distances[vertex] = vertex === source ? 0 : Infinity
            parents[vertex] = null
        })

        let currVertex = source

        while (currVertex !== null) {
            let distance = distances[currVertex]
            let neighbours = Object.keys(this.adjacencyList[currVertex])
            neighbours.map((neighbour) => {
                let newDistance =
                    distance + this.adjacencyList[currVertex][neighbour]

                if (distances[neighbour] > newDistance) {
                    distances[neighbour] = newDistance
                    parents[neighbour] = currVertex
                }
            })
            visited.add(currVertex)
            currVertex = this.findNextUnvisitedNodeWithLeastDistance(
                distances,
                visited
            )
        }
        console.log(distances, parents)

        if (source === destination) {
            totalDistance = Infinity
            return { totalDistance }
        }
    }

    computeShortestPath(distances, parents, source, destination) {
        start
    }
    findNextUnvisitedNodeWithLeastDistance(distances, visited) {
        let minDistance = Infinity
        const minVertex = this.vertices.reduce((prevMinVertex, vertex) => {
            if (!visited.has(vertex) && distances[vertex] < minDistance) {
                minDistance = distances[vertex]
                return vertex
            } else return prevMinVertex
        }, null)
        return minVertex
    }
}

const main = () => {
    const vertices = ['A', 'B', 'C', 'D']
    const edgesDetails = [
        ['A', 'B', 3],
        ['A', 'C', 2],
        ['B', 'D', 2],
        ['C', 'D', 6],
    ]

    let g = new Graph()

    vertices.map((ele) => g.addVertex(ele))

    edgesDetails.map((edge) => g.addEdge(edge[0], edge[1], edge[2]))
    // g.printGraph()

    // Test Cases
    test(g.shortestPath('A', 'B'), { totalDistance: 5, path: ['B', 'D'] })
}

const test = (actual, expected) => {
    try {
        assert.deepEqual(actual, expected, '------Test Case Failed------')
        console.log('Test case Passed')
    } catch (error) {
        console.log(error.message)
    }
}
try {
    main()
} catch (error) {
    console.log(error.message)
}
