class Corona {
    constructor(public place: string, public cases: number) {
    }
}

class Stats {
    constructor(public min: number, public max: number, public average: number) {
    }
}

const getStats = (coronaCases: Corona[]): Stats => {
    let sum = 0;
    let max: number = coronaCases[0].cases;
    let min: number = coronaCases[0].cases;
    coronaCases.forEach((c) => {
        sum += c.cases
        if (c.cases > max) max = c.cases;
        if (c.cases < min) min = c.cases;
    })

    return new Stats(min, max, sum / coronaCases.length);
}

const coronaCases: Corona[] = [
    new Corona('Baden-Württenberg', 932965),
    new Corona('Bayern', 1246136),
    new Corona('Berlin', 297446),
    new Corona('Brandeburg', 210009),
    new Corona('Bremen', 42434),
    new Corona('Hamburg', 122871)
]

// Start listening on port 8080 of localhost.
const server = Deno.listen({port: 8080});
console.log(HTTP webserver running.  Access it at:  http://localhost:8080/);

// Connections to the server will be yielded up as an async iterable.
for await (const conn of server) {
    // In order to not be blocking, we need to handle each connection individually
    // without awaiting the function
    serveHttp(conn);
}

async function serveHttp(conn: Deno.Conn) {
    // This "upgrades" a network connection into an HTTP connection.
    const httpConn = Deno.serveHttp(conn);
    // Each request sent over the HTTP connection will be yielded as an async
    // iterator from the HTTP connection.
    for await (const requestEvent of httpConn) {
        // The native HTTP server uses the web standard Request and Response
        // objects.
        const stats = getStats(coronaCases);
        const body = min: ${stats.min}, max: ${stats.max}, average: ${stats.average}
        // The requestEvent's .respondWith() method is how we send the response
        // back to the client.
        requestEvent.respondWith(
            new Response(body, {
                status: 200,
            }),
        );
    }
}