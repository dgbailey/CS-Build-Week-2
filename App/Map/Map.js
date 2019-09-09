//exported graph object

const Graph = (startingRoom) =>{
        
    
        let graphState = 
        {"0":{"s":2,"n":10,"e":4,"w":1},"1":{"e":0},"2":{"e":3,"n":0,"s":6},"3":{"s":9,"e":5,"w":2},"4":{"w":0,"n":23,"e":13},"5":{"w":3},"6":{"n":2,"w":7},"7":{"e":6,"n":8,"w":56},"8":{"s":7,"w":16},"9":{"e":11,"n":3,"s":12},"10":{"s":0,"n":19,"w":43},"11":{"e":17,"w":9},"12":{"n":9,"s":18,"e":14,"w":21},"13":{"w":4,"e":15},"14":{"s":34,"e":37,"w":12},"15":{"w":13},"16":{"e":8,"n":58,"w":67},"17":{"e":42,"n":24,"w":11},"18":{"n":12,"s":22,"w":25},"19":{"s":10,"n":20,"w":77},"20":{"s":19,"n":63,"e":27,"w":46},"21":{"e":12,"w":29},"22":{"n":18,"s":78,"w":36},"23":{"s":4,"e":26},"24":{"s":17},"25":{"e":18},"26":{"w":23,"e":55},"27":{"w":20,"n":40,"s":28,"e":30},"28":{"n":27},"29":{"e":21,"s":45,"w":49},"30":{"w":27,"s":31,"e":32},"31":{"n":30,"e":33},"32":{"w":30,"n":39,"e":54},"33":{"w":31,"e":38},"34":{"e":35,"n":14,"s":50},"35":{"s":52,"w":34},"36":{"w":60,"s":48,"e":22},"37":{"w":14},"38":{"w":33,"s":59,"e":66},"39":{"s":32,"n":53,"e":51,"w":41},"40":{"s":27},"41":{"e":39},"42":{"s":80,"n":44,"e":118,"w":17},"43":{"e":10,"w":47},"44":{"s":42},"45":{"n":29,"s":60},"46":{"e":20,"w":62},"47":{"e":43,"n":71},"48":{"n":36,"s":105,"w":149},"49":{"e":29,"s":79,"w":136},"50":{"n":34,"s":89},"51":{"w":39,"n":69,"e":57},"52":{"s":68,"n":35,"e":75},"53":{"s":39,"n":95,"w":88},"54":{"w":32},"55":{"w":26},"56":{"e":7,"w":61},"57":{"w":51,"e":145},"58":{"s":16,"w":65},"59":{"n":38,"s":104,"e":92},"60":{"n":45,"e":36,"w":70},"61":{"e":56,"w":171},"62":{"e":46,"n":64,"w":84},"63":{"s":20,"n":72,"w":73},"64":{"s":62,"w":82},"65":{"e":58,"n":74,"w":139},"66":{"w":38,"n":169,"e":123},"67":{"e":16,"w":162},"68":{"e":100,"n":52},"69":{"s":51,"n":94,"e":103},"70":{"w":98,"s":163,"e":60},"71":{"s":47},"72":{"s":63,"w":76},"73":{"e":63},"74":{"s":65,"n":87,"w":161},"75":{"w":52,"e":85},"76":{"e":72,"n":83,"w":110},"77":{"e":19},"78":{"n":22,"s":108},"79":{"n":49},"80":{"e":86,"n":42,"s":81},"81":{"n":80},"82":{"e":64,"n":191},"83":{"s":76,"e":130,"w":125},"84":{"e":62,"w":91},"85":{"w":75,"e":154},"86":{"e":90,"s":96,"w":80},"87":{"s":74},"88":{"e":53,"w":122},"89":{"n":50,"s":93},"90":{"e":178,"w":86},"91":{"e":84,"n":180,"s":101,"w":99},"92":{"w":59},"93":{"n":89,"w":108},"94":{"s":69,"n":152},"95":{"s":53,"n":119,"w":115},"96":{"n":86,"e":97},"97":{"w":96,"e":181},"98":{"w":109,"n":102,"s":126,"e":70},"99":{"e":91,"n":190,"w":146},"100":{"s":106,"e":112,"w":68},"101":{"n":91,"w":113},"102":{"s":98,"w":142},"103":{"w":69,"n":160},"104":{"n":59,"e":107},"105":{"n":48,"w":202},"106":{"w":135,"n":100,"s":111},"107":{"w":104,"s":120,"e":121},"108":{"n":78,"s":117,"e":93},"109":{"w":175,"s":185,"e":98},"110":{"e":76},"111":{"n":106,"s":367,"e":158},"112":{"w":100,"s":141,"e":140},"113":{"e":101,"s":114},"114":{"n":113,"w":176},"115":{"e":95,"n":116},"116":{"s":115,"n":132},"117":{"n":108,"s":131,"e":166,"w":133},"118":{"w":42,"e":137},"119":{"s":95,"n":134},"120":{"n":107,"e":127},"121":{"w":107,"n":128,"e":143},"122":{"e":88,"n":124},"123":{"w":66},"124":{"s":122,"n":157},"125":{"e":83,"n":165,"w":237},"126":{"s":129,"n":98},"127":{"w":120,"e":184},"128":{"s":121,"e":189},"129":{"e":194,"n":126,"w":170},"130":{"w":83},"131":{"n":117,"s":244,"w":138},"132":{"s":116},"133":{"e":117,"w":173},"134":{"s":119,"n":147,"e":144},"135":{"s":150,"e":106},"136":{"e":49,"w":148},"137":{"w":118},"138":{"e":131,"s":211,"w":195},"139":{"e":65,"w":188},"140":{"w":112},"141":{"n":112,"e":156},"142":{"e":102,"w":159},"143":{"w":121,"e":212},"144":{"w":134,"e":155},"145":{"w":57,"n":174,"e":220},"146":{"e":99,"n":215,"s":177,"w":257},"147":{"s":134,"n":200,"e":153,"w":151},"148":{"e":136,"w":292},"149":{"e":48},"150":{"w":166,"n":135},"151":{"e":147,"n":172,"w":207},"152":{"s":94},"153":{"w":147,"e":329},"154":{"w":85,"e":193},"155":{"w":144,"s":187,"e":316},"156":{"w":141,"s":168,"e":164},"157":{"s":124,"n":210,"w":182},"158":{"w":111,"s":167},"159":{"e":142,"w":196},"160":{"s":103},"161":{"e":74},"162":{"e":67},"163":{"n":70},"164":{"w":156,"n":217,"e":298},"165":{"s":125,"n":203,"w":204},"166":{"s":198,"e":150,"w":117},"167":{"n":158,"s":262,"e":260},"168":{"n":156,"e":340},"169":{"s":66,"e":186},"170":{"e":129},"171":{"e":61},"172":{"s":151,"n":267},"173":{"e":133,"w":214},"174":{"s":145,"n":192,"e":224},"175":{"s":183,"e":109,"w":179},"176":{"e":114,"w":402},"177":{"n":146,"w":346},"178":{"e":243,"n":209,"w":90},"179":{"e":175,"s":233,"w":213},"180":{"s":91},"181":{"w":97},"182":{"e":157,"w":208},"183":{"s":229,"n":175},"184":{"w":127,"e":221},"185":{"n":109},"186":{"w":169,"e":205},"187":{"n":155},"188":{"e":139,"w":335},"189":{"w":128,"e":255},"190":{"s":99},"191":{"s":82},"192":{"s":174,"n":201,"e":223},"193":{"w":154,"e":251},"194":{"s":214,"w":129},"195":{"e":138,"s":228,"w":225},"196":{"e":159,"n":222,"w":197},"197":{"e":196,"n":232,"w":276},"198":{"s":239,"n":166,"e":199},"199":{"w":198,"s":230},"200":{"s":147,"n":227,"e":206},"201":{"s":192},"202":{"e":105},"203":{"s":165,"n":268,"e":299},"204":{"e":165,"n":219,"w":216},"205":{"w":186,"s":241,"e":479},"206":{"w":200,"n":288,"e":380},"207":{"e":151,"n":231,"w":290},"208":{"e":182},"209":{"s":178},"210":{"s":157},"211":{"n":138},"212":{"w":143},"213":{"e":179,"w":420},"214":{"e":173,"n":194,"w":226},"215":{"s":146,"n":246},"216":{"e":204,"n":234,"w":218},"217":{"s":164,"e":247},"218":{"e":216,"s":263,"w":242},"219":{"s":204},"220":{"w":145},"221":{"w":184,"s":253,"e":240},"222":{"s":196,"n":305},"223":{"w":192,"n":283},"224":{"w":174},"225":{"e":195,"s":278},"226":{"e":214,"s":300},"227":{"s":200,"n":269},"228":{"n":195,"s":281},"229":{"s":250,"n":183,"w":236},"230":{"n":199,"s":307,"e":297},"231":{"s":207,"w":248},"232":{"s":197,"n":272,"w":235},"233":{"n":179,"w":238},"234":{"s":216,"n":368,"w":252},"235":{"e":232,"n":330,"w":355},"236":{"e":229,"s":264},"237":{"e":125,"w":245},"238":{"e":233},"239":{"w":244,"n":198},"240":{"w":221,"n":249,"e":386},"241":{"n":205,"e":266},"242":{"e":218,"n":287,"s":259,"w":275},"243":{"e":256,"s":293,"w":178},"244":{"n":131,"e":239},"245":{"e":237,"s":254},"246":{"s":215},"247":{"w":217,"e":261},"248":{"e":231,"n":296,"w":280},"249":{"s":240,"n":265,"e":282},"250":{"n":229,"s":294,"e":289},"251":{"w":193,"e":315},"252":{"e":234,"n":284},"253":{"n":221,"e":258},"254":{"n":245,"w":314},"255":{"w":189},"256":{"e":327,"s":360,"w":243},"257":{"e":146,"n":320,"w":364},"258":{"w":253,"e":306},"259":{"n":242,"w":310},"260":{"w":167},"261":{"w":247,"s":277,"e":322},"262":{"n":167,"s":370,"e":358},"263":{"n":218},"264":{"n":236,"s":274,"w":273},"265":{"s":249,"n":279,"e":270},"266":{"w":241},"267":{"s":172,"n":285,"w":271},"268":{"s":203,"e":411,"w":312},"269":{"s":227,"n":319},"270":{"w":265,"n":416,"e":338},"271":{"e":267,"n":337},"272":{"s":232,"n":295},"273":{"e":264,"n":343},"274":{"n":264,"w":308},"275":{"e":242,"w":456},"276":{"e":197,"w":419},"277":{"n":261,"e":323},"278":{"n":225},"279":{"s":265},"280":{"e":248,"n":325},"281":{"n":228,"s":318,"e":309,"w":317},"282":{"w":249},"283":{"s":223,"n":331,"e":313},"284":{"s":252,"n":302,"w":303},"285":{"s":267,"n":286},"286":{"s":285,"n":336,"w":291},"287":{"s":242,"w":339},"288":{"s":206},"289":{"w":250},"290":{"e":207},"291":{"e":286,"n":410,"w":347},"292":{"e":148,"n":301},"293":{"n":243},"294":{"n":250,"s":334},"295":{"s":272},"296":{"s":248},"297":{"w":230},"298":{"w":164,"s":324},"299":{"w":203,"e":311},"300":{"n":226,"s":377,"w":389},"301":{"s":292,"n":304},"302":{"s":284,"n":422},"303":{"e":284,"n":361,"w":405},"304":{"s":301},"305":{"s":222,"n":365},"306":{"w":258,"e":397},"307":{"n":230,"s":373,"e":371,"w":321},"308":{"e":274},"309":{"w":281,"s":333,"e":326},"310":{"e":259,"w":412},"311":{"w":299},"312":{"e":268,"n":328},"313":{"w":283},"314":{"e":254},"315":{"w":251},"316":{"w":155,"n":344},"317":{"e":281,"s":387,"w":409},"318":{"n":281,"s":487},"319":{"s":269,"n":359,"e":345},"320":{"s":257,"n":348},"321":{"e":307,"s":413},"322":{"w":261,"n":382,"e":435},"323":{"w":277,"e":433},"324":{"n":298,"s":349,"e":354},"325":{"s":280,"n":353,"w":374},"326":{"w":309,"s":342},"327":{"e":427,"w":256},"328":{"s":312,"n":332,"e":357,"w":363},"329":{"w":153},"330":{"s":235,"n":369,"w":383},"331":{"s":283,"e":446},"332":{"s":328,"n":350},"333":{"n":309,"s":378},"334":{"n":294,"s":393,"e":341,"w":391},"335":{"e":188,"w":366},"336":{"s":286},"337":{"s":271},"338":{"w":270,"s":379},"339":{"e":287,"w":445},"340":{"w":168},"341":{"w":334,"s":449},"342":{"n":326,"s":432},"343":{"s":273,"w":351},"344":{"s":316,"n":392,"e":390},"345":{"w":319,"s":375},"346":{"e":177},"347":{"e":291,"n":452,"s":442},"348":{"s":320},"349":{"n":324,"s":352,"e":384,"w":356},"350":{"s":332,"n":436,"e":404},"351":{"e":343,"s":491,"w":478},"352":{"n":349,"s":362,"e":485},"353":{"s":325},"354":{"w":324},"355":{"e":235},"356":{"e":349},"357":{"w":328},"358":{"w":262,"e":401},"359":{"s":319},"360":{"n":256,"e":398},"361":{"s":303,"n":408},"362":{"n":352,"s":399,"w":463},"363":{"e":328,"n":372},"364":{"e":257,"n":429,"s":381,"w":448},"365":{"s":305},"366":{"e":335},"367":{"n":111},"368":{"s":234},"369":{"s":330,"n":400,"w":376},"370":{"n":262,"s":434,"e":407},"371":{"w":307,"s":475},"372":{"s":363,"n":441},"373":{"n":307,"s":480},"374":{"e":325},"375":{"n":345,"e":385},"376":{"e":369},"377":{"n":300},"378":{"n":333},"379":{"n":338,"e":395},"380":{"w":206,"n":424},"381":{"n":364,"w":394},"382":{"s":322,"e":388},"383":{"e":330,"w":495},"384":{"w":349},"385":{"w":375},"386":{"w":240,"e":414},"387":{"n":317,"s":417,"w":431},"388":{"w":382,"e":477},"389":{"e":300},"390":{"w":344},"391":{"e":334,"s":396,"w":428},"392":{"s":344,"e":462},"393":{"n":334,"s":482},"394":{"e":381},"395":{"w":379,"s":403,"e":421},"396":{"n":391},"397":{"w":306},"398":{"w":360,"e":438},"399":{"n":362,"s":467},"400":{"s":369},"401":{"w":358},"402":{"e":176,"w":451},"403":{"n":395},"404":{"w":350,"n":481},"405":{"e":303,"n":406},"406":{"s":405,"w":415},"407":{"w":370,"s":496},"408":{"s":361,"n":458,"w":423},"409":{"e":317},"410":{"s":291},"411":{"w":268},"412":{"e":310,"s":488},"413":{"n":321},"414":{"w":386},"415":{"e":406,"w":418},"416":{"s":270},"417":{"n":387},"418":{"e":415,"n":425,"s":474},"419":{"e":276},"420":{"e":213,"s":444,"w":437},"421":{"w":395,"n":440},"422":{"s":302,"n":426},"423":{"e":408,"w":454},"424":{"s":380,"e":473},"425":{"s":418,"w":469},"426":{"s":422,"n":457},"427":{"e":430,"w":327},"428":{"e":391},"429":{"s":364},"430":{"n":443,"e":439,"w":427},"431":{"e":387,"w":492},"432":{"n":342},"433":{"w":323,"s":455,"e":460},"434":{"n":370},"435":{"w":322},"436":{"s":350},"437":{"e":420,"w":497},"438":{"w":398,"e":465},"439":{"w":430},"440":{"s":421,"w":476},"441":{"s":372},"442":{"n":347},"443":{"e":471,"s":430},"444":{"n":420,"w":490},"445":{"e":339,"n":447,"w":450},"446":{"w":331,"e":466},"447":{"s":445},"448":{"e":364},"449":{"n":341},"450":{"e":445},"451":{"e":402,"w":453},"452":{"s":347},"453":{"e":451,"s":464},"454":{"e":423,"n":470},"455":{"n":433},"456":{"e":275,"w":499},"457":{"s":426,"n":461},"458":{"s":408,"w":459},"459":{"e":458},"460":{"w":433},"461":{"s":457},"462":{"w":392},"463":{"e":362,"s":468},"464":{"n":453},"465":{"w":438,"e":498},"466":{"w":446,"s":486,"e":472},"467":{"n":399},"468":{"n":463},"469":{"e":425},"470":{"s":454},"471":{"w":443},"472":{"w":466},"473":{"w":424,"e":494},"474":{"n":418},"475":{"n":371,"s":484},"476":{"e":440},"477":{"w":388,"e":483},"478":{"e":351},"479":{"w":205},"480":{"n":373},"481":{"s":404},"482":{"n":393},"483":{"w":477},"484":{"n":475},"485":{"w":352},"486":{"n":466},"487":{"n":318,"s":489},"488":{"n":412},"489":{"n":487},"490":{"e":444,"w":493},"491":{"n":351},"492":{"e":431},"493":{"e":490},"494":{"w":473},"495":{"e":383},"496":{"n":407},"497":{"e":437},"498":{"w":465},"499":{"e":456}}
    
    // else{
    //     let graphState = {}
    //     graphState[startingRoom.room_id] = {}
    //     startingRoom.exits.forEach(
    //     exit => graphState[startingRoom.room_id][exit] = '?')
    // }
  
    // graphState[startingRoom.room_id] = {}
    // startingRoom.exits.forEach(
    //     exit => graphState[startingRoom.room_id][exit] = '?'
    // )
    console.log("Starting Graphstate",graphState)
    // graphState[roomId] = {"n": "?", "s": "?", "e": "?", "w": "?"}

    //graph 'inherits' properties from other function objects via concatenative inheritance 

    return Object.assign({},chooseRandomDFS(graphState),
                            update(graphState),
                            checkUnexplored(graphState),
                            bfs(graphState),
                            getState(graphState))
}


//BFS for shortest path to a desired room

const bfs = graphState  =>{
    //defaults to finding unexplored rooms
    //returns null or array of vertices [0,3,4,5,etc]
    //will also take custom configurable for finding store and other landmarks
    //perhaps label the store with a special key once found
    return(
        {
        'bfs': (currentRoomState, desired_room_identifyer = '?') => {
           
            //helper function for searching within graph sub arrays
            function _room_identifyer_helper(graphDirectionArray){
                let roomDirections = Object.keys(graphDirectionArray)
                console.log("DESITED IDENT",desired_room_identifyer)
                // let curr = graphState[currentRoomState.room_id]
                let directions = []
                roomDirections.forEach(directionKey => {
                    if(graphDirectionArray[directionKey] === desired_room_identifyer){
                        directions.push(directionKey)
                        console.log("Room Directions",roomDirections)
                        }
                    })
                if(directions.length < 1){
                    console.log("_room_identifyer_helper: No matching destination for BFS")
                    return false
                }
                else{
                    return directions[0]
                }

            }

            //start BFS

            let queue = []
            queue.push([currentRoomState.room_id])
            let found = []

            while (queue.length > 0){
                let path = queue.shift() 
                let vertex = path[path.length -1]
                console.log("Currnt Vertex",vertex)
                console.log("Currnt Path",path)

                
               

                if(!found.includes(vertex)){
                    //if our current vertex has not been visited check for our search value
                    
                    let check_for_desired_room_identifyer = _room_identifyer_helper(graphState[vertex])
                    if(check_for_desired_room_identifyer){
                        return path
                    }
                    
                    //append visited vertex to found
                    found.push(vertex)
                    let possible_directions = Object.keys(graphState[vertex])
                    
                    possible_directions.forEach(direction => {
                        //for each direct neighbor of current vertex, copy current path, append that neighbor, enqueue new path
                        let new_path_to_explore = [...path]
                        if(!found.includes(graphState[vertex][direction])){
                            new_path_to_explore.push(graphState[vertex][direction])
                            queue.push(new_path_to_explore)
                            console.log("pushing to queue",new_path_to_explore)
                            console.log("QUEUQ",queue)
                        }
                        

                    })

                   
                }

                
            }
            return null
            
        }
    })
}


//checks if there are still unexplored rooms in graph
const checkUnexplored = graphState =>{
    return(
        {
        'checkUnexplored':() => {
            let found = false
           Object.keys(graphState).forEach(key => {
                let subKeys = Object.keys(graphState[key])
            
                
                for(direction of subKeys){
                   
                    if(graphState[key][direction] === '?'){
                     
                      found = true
                      break
                        
                    }
                }
                return found  
                
               })
                   
            return found
              
        
           
        }

    })
}

//choose random starting point for depthfirst search of graph
const chooseRandomDFS = graphState =>{
    //takes current room object
    return (
        {
        'chooseRandomDFS': roomObject =>{
            let unvisitedRooms = []
            let roomId = roomObject.room_id
            
            console.log("Iterable test",graphState[roomId])
            //check for quetion marks in exits array
            // for (direction of roomObject.exits){
            //     console.log("CHOICE EXITS",roomObject.exits)
            //     if (graphState[roomId][direction] === "?"){
            //         unvisitedRooms.push(direction)
            //     }
            // }
            //is checking the exit array correct?
            for (let direction in graphState[roomId]){
                console.log("CHOICE EXITS",roomObject.exits)
                if (graphState[roomId][direction] === "?"){
                    unvisitedRooms.push(direction)
                }
            }
            

            //return false if dead end -- no unexplored rooms
            if (unvisitedRooms.length < 1){
                console.log("DEAD END MY Graph State",graphState,unvisitedRooms)
                console.log("DEAD END MY Graph LastRoom",roomId)

                return false
            }


      
            else{
                //select random direction
                let choiceIndex = Math.floor(Math.random() * unvisitedRooms.length)
                console.log("STILL unvisited SELECTED:",unvisitedRooms[choiceIndex])
                return unvisitedRooms[choiceIndex]
            }


        }
    })
}
const getState = graphState => {
    return(
        {'getState':() => graphState}
    )
    
}
const update = graphState => {

    return(
        {
            "update":(newRoomObject,prevRoomObject,prevDirection) =>{
                function get_opposite(direction){
                
                    const direction_dict = {'n':'s','s':'n','e':'w','w':'e'};
                    return direction_dict[direction]
                }
                graphState[prevRoomObject.room_id][prevDirection] = newRoomObject.room_id;
                console.log("new G State immmed",graphState)

                //perform updates when new data found for existing rooms
                //'in' Object.keys() on a the resulting list returns true for indices, in on a dict returns true for keys
                //not sure if this section is even necessary
                //it coincidentally asked for an array index that happened to be in the array of object keys
                //I think this is where the error came from
                if (newRoomObject.room_id in graphState){
                    console.log("existing room object",graphState[newRoomObject.room_id])
                    let inverseDirectionForUpdate = get_opposite(prevDirection);
                 
                    graphState[newRoomObject.room_id][inverseDirectionForUpdate] = prevRoomObject.room_id;
                    console.log("new G State existing updated",graphState)
                }
                

                else{
                    //add new room when new room id not found in graphstate
                    //update new room with directions back to previous room
                    let inverseDirectionForUpdate = get_opposite(prevDirection);
                 
                    graphState[newRoomObject.room_id] = {}
                    newRoomObject.exits.forEach(exitLabel => {
                        graphState[newRoomObject.room_id][exitLabel] = '?';
                    })
                   
                    graphState[newRoomObject.room_id][inverseDirectionForUpdate] = prevRoomObject.room_id
                    console.log("new G State not existing updated",graphState)
                }



            }
        }
    )

}

module.exports = {graph:Graph}



//test
// const myGraph = Graph()
// console.log(myGraph.graphState)

//graph
//player
//blockchain
//wise explorer
//find shop
//cooldown