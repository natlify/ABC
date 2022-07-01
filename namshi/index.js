/**
 *M->D
D->M
D->K
K->D
K->H
H->C
C->M
 */

class Graph {
    constructor() {
        /** Input goes here */
        this.adjacencyList = {
            M: {
                D: 1,
            },
            D: {
                K: 1,
                M: 1,
            },
            K: {
                D: 1,
                H: 1,
            },
            H: {
                C: 1,
            },
            C: {
                M: 1,
            },
        }
        this.vertices = Object.keys(this.adjacencyList)
    }

    printGraph() {
        console.log(JSON.stringify(this.adjacencyList, null, 4))
    }

    // Prints a viable path if it exists
    findPath(source, destination) {
        // Check if the vertices exist
        if (!this.adjacencyList[source] || !this.adjacencyList[destination]) {
            console.log("Source or destination doesn't exist")
            return false
        }

        //         // Check who are all the neighbours from current
        // neighbours  = []
        // # for each of the neighbours
        // check if any of the neighbours are destination.
        // if so stop
        // if not mark current node are visited
        // arbitarily pick one of the neighbours  // since there are no distances
        // repeat the process
        // until either the node is found or all nodes are marked as visited
        let current = source
        let visited = new Set()
        let neighbours = this.adjacencyList[current]
        let parents = []

        while (visited.size !== this.vertices.length && current) {
            if (neighbours[destination]) {
                // stop
                console.log('Found')
                parents.push[current]
                return
            } else {
                visited.add(current)
                let nonVisted = Object.keys(neighbours).filter(
                    (vertex) => !visited.has(vertex)
                )
                if (!nonVisted.length) {
                    current = null
                } else current = nonVisted[0]
            }
        }

        console.log(parents)

        return true
    }
}

const main = () => {
    try {
        // function calls
        let cities = new Graph()
        cities.printGraph()
        cities.findPath('C', 'M')
        cities.findPath('H', 'G')
        cities.findPath('C', 'H')
        cities.findPath('H', 'B')
    } catch (error) {
        console.log(error)
    }
}

main()
