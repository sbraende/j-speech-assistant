import cmdLibrary from "../json/library.json"
import { buildSoundboard } from "./main"

const arrangmentArray = [
    ["1-1", cmdLibrary.teppe], ["1-2", cmdLibrary.kakao], ["1-3", cmdLibrary.sofa], ["1-4", cmdLibrary.bok],
    ["2-1", cmdLibrary.peis], ["2-2", cmdLibrary.filmkveld], ["2-3", cmdLibrary.pledd], ["2-4", cmdLibrary.stearinlys],
    ["3-1", cmdLibrary.musikk], ["3-2", cmdLibrary.strikke], ["3-3", cmdLibrary.godteri], ["3-4", cmdLibrary.klem]
]

buildSoundboard(arrangmentArray)