// content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "start") {
    // Replace 'selector' with the CSS selector for the element you want to click.
    let plusButton = document.querySelector("#main > footer > div._2lSWV._3cjY2.copyable-area > div > span:nth-child(2) > div > div._2xy_p._1bAtO > div._1OT67 > div > div")
    plusButton.click();
    
    const poll = document.querySelector("#main > footer > div._2lSWV._3cjY2.copyable-area > div > span:nth-child(2) > div > div._2xy_p._1bAtO > div._1OT67 > div > span > div > ul > div > div:nth-child(5) > li > div")
    poll.click()

    // document.querySelector("#app > div > span:nth-child(3) > div > div > div > div > div > div > div > div > div.g0rxnol2.thghmljt.p357zi0d.rjo8vgbg.ggj6brxn.f8m0rgwh.gfz4du6o.ag5g9lrv.bs7a17vp.ov67bkzj > div > div._38pm5._1HTgn > div._2Mre-._3aXOV > div._1N-sl > div > div.to2l77zo.gfz4du6o.ag5g9lrv.fe5nidar.kao4egtt > p").focus()
    // document.execCommand('insertText', false, "asdf")
  }
});
