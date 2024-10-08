import cmdLibrary from "../json/library.json"
import { buildSoundboard } from "./main"

const arrangmentArray = [
    ["1-1", cmdLibrary.bra], ["1-2", cmdLibrary.unnskyld], ["1-3", cmdLibrary.du], ["1-4", cmdLibrary.jeg],
    ["2-1", cmdLibrary.ja], ["2-2", cmdLibrary.vetIkke], ["2-3", cmdLibrary.ferdig], ["2-4", cmdLibrary.nei],
    ["3-1", cmdLibrary.kan], ["3-2", cmdLibrary.stopp], ["3-3", cmdLibrary.spise], ["3-4", cmdLibrary.dorlig]
]

buildSoundboard(arrangmentArray)