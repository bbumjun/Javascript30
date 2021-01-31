/**
 * 구현해야 할 기능
 * 1. 재생 정지 토글
 * 2. 재생 시간 이동
 * 3. 볼륨 컨트롤
 * 4. 재생 속도 조절
 * 5. 10초, 25초 넘김 버튼
 */

const player = document.querySelector(".viewer")
const playButton = document.querySelector(".player__button")
const toggleButton = document.querySelector(".toggle")
const skipButtons = document.querySelectorAll("[data-skip]")
const progress = document.querySelector(".progress")
const progressBar = document.querySelector(".progress__filled")
const ranges = document.querySelectorAll(".player__slider")

let updateToggleButton = () => (toggleButton.textContent = player.paused ? "►" : "❚ ❚")
let togglePlay = () => player[player.paused ? "play" : "pause"]()
let handleProgress = () =>
  (progressBar.style.flexBasis = `${(player.currentTime / player.duration) * 100}%`)
player.addEventListener("click", togglePlay)
player.addEventListener("play", updateToggleButton)
player.addEventListener("pause", updateToggleButton)
player.addEventListener("timeupdate", handleProgress)
let controlRange = (e, range) => (player[range.name] = e.target.value)

ranges.forEach((range) => {
  range.addEventListener("click", (e) => controlRange(e, e.target))
  range.addEventListener("mousedown", () => {
    range.addEventListener("mousemove", (e) => {
      controlRange(e, e.target)
    })
  })
})

skipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    player.currentTime += parseFloat(button.dataset.skip)
  })
})

let scrup = (e) => (player.currentTime = (e.offsetX / progress.offsetWidth) * player.duration)
progress.addEventListener("mousedown", () => progress.addEventListener("mousemove", scrup))
progress.addEventListener("mouseup", () => progress.removeEventListener("mousemove", scrup))
progress.addEventListener("click", scrup)
