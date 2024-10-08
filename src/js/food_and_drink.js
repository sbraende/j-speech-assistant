import cmdLibrary from "../json/library.json"
import { buildSoundboard } from "./main"

const arrangmentArray = [
    ["1-1", cmdLibrary.drikke], ["1-2", cmdLibrary.kopp], ["1-3", cmdLibrary.vann], ["1-4", cmdLibrary.brod],
    ["2-1", cmdLibrary.kjott], ["2-2", cmdLibrary.frukt], ["2-3", cmdLibrary.gronnsaker], ["2-4", cmdLibrary.pizza],
    ["3-1", cmdLibrary.pasta], ["3-2", cmdLibrary.fisk], ["3-3", cmdLibrary.kake], ["3-4", cmdLibrary.is]
]

buildSoundboard(arrangmentArray)