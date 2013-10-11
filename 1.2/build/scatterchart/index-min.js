/*! kcharts - v1.2 - 2013-10-11 1:40:29 PM
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/scatterchart/theme",function(){var l="{COLOR}",t={"ks-chart-default":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:l},hoverAttr:{stroke:"#fff",r:5,fill:l,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-analytiks":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:l},hoverAttr:{stroke:"#fff",r:5,fill:l,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-rainbow":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:l},hoverAttr:{stroke:"#fff",r:5,fill:l,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}}};return t}),KISSY.add("gallery/kcharts/1.2/scatterchart/index",function(l,t,e,r,i,n,s,a,o,h,c,x){var y,u=l.all,f=l.Event,d="ks-chart-",p=d+"default",v=d+"evtlayout",g=v+"-rects",m="{COLOR}",_=function(l){var t=this;t._cfg=l,t._cfg.zoomType="xy",t.init()};return l.extend(_,r,{init:function(){var t=this;if(r.prototype.init.call(t,t._cfg),t.chartType="scatterchart",t._$ctnNode[0]){var e={themeCls:p,autoRender:!0,title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:!0},colors:[],subTitle:{content:"",css:{"text-align":"center","font-size":"12px"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:m,opacity:.6},hoverAttr:{stroke:"#fff",r:5,fill:m,"stroke-width":0,opacity:1}},legend:{isShow:!1},xLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},yLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},xAxis:{isShow:!0,css:{zIndex:10}},yAxis:{isShow:!0,css:{zIndex:10},num:5},xGrids:{isShow:!0,css:{}},yGrids:{isShow:!0,css:{}},tip:{isShow:!0,clsName:"",template:"",css:{},offset:{x:0,y:0},boundryDetect:!0}};t._finished=[],p=t._cfg.themeCls||e.themeCls,t._cfg=l.mix(l.mix(e,o[p],x,x,!0),t._cfg,x,x,!0),t.color=y=new n({themeCls:p}),t._cfg.colors.length>0&&y.removeAllColors();for(var i in t._cfg.colors)y.setColor(t._cfg.colors[i]);t._cfg.autoRender&&t.render(!0)}},drawTitle:function(){var t=this,e=t.htmlPaper,r=p+"-title",i=t._cfg,n=t._innerContainer,s=.6*n.y;i.title.isShow&&""!=i.title.content&&(t._title=e.rect(0,0,t._$ctnNode.width(),s).addClass(r).css(l.mix({"line-height":s+"px"},i.title.css)).html(i.title.content))},drawSubTitle:function(){var t=this,e=t.htmlPaper,r=p+"-subtitle",i=t._cfg,n=t._innerContainer,s=.4*n.y;i.subTitle.isShow&&""!=i.subTitle.content&&(t._subTitle=e.rect(0,.6*n.y,t._$ctnNode.width(),s).addClass(r).css(l.mix({"line-height":s+"px"},i.subTitle.css)).html(i.subTitle.content))},processAttr:function(t,e){var r=l.clone(t);for(var i in r)r[i]&&"string"==typeof r[i]&&(r[i]=r[i].replace(m,e));return r},diffStocksSize:function(){var t=this,e=t._cfg.points.attr.r,i=t._datas.total,n=[];for(var s in i)n=n.concat(r.prototype.getArrayByKey.call(null,i[s].data,2));if(n.length)for(var s in t._points){var a=r.prototype.getArrayByKey.call(null,i[s].data,2);l.log(a);for(var o in t._points[s])a.length>0&&(t._points[s][o].r=a[o]*e)}else for(var s in t._points)for(var o in t._points[s])t._points[s][o].r=e},drawAllStocks:function(){var l=this;l._stocks={_stocks:[]};for(var t in l._points)l._stocks[t]={stocks:l.drawStocks(t)}},drawStocks:function(l){var t=this,e=[],r=t.color.getColor(l).DEFAULT;for(var i in t._points[l]){var n=t._points[l][i];e[i]=t.drawStock(n.x,n.y,n.r,{stroke:r,fill:r,r:n.r})}return e},drawStock:function(l,t,e,r){var i=this,n=i.paper,s=i._cfg.points.attr;return n.circle(l,t,e,r).attr(s).attr(r)},drawGridsX:function(){for(var l=this,t=l._centerPoints,e=0,r=t.length;r>e;e++){var i=l.drawGridX(t[e]);l._gridsX.push(i)}return l._gridsX},drawGridX:function(l,t){var e=this,r=e._innerContainer.tl.y,i=e._innerContainer.height,t=t||e._cfg.xGrids.css,n=e.htmlPaper,s=e._cfg.themeCls+"-gridsx";return n.lineY(l.x,r,i).addClass(s).css(e._cfg.xGrids.css)},drawGridY:function(l,t){var e=this,r=e._innerContainer.width,t=t||e._cfg.yGrids.css,i=e.htmlPaper,n=e._cfg.themeCls+"-gridsy";return i.lineX(l.x,l.y,r).addClass(n).css(t)},drawGridsY:function(){for(var l=this,t=l._innerContainer.tl.x,e=l._pointsY,r=0,i=e.length;i>r;r++)l._gridsY[r]={0:l.drawGridY({x:t,y:e[r].y}),num:l.coordNum[r]}},drawAxisX:function(){var l=this,t=l._innerContainer,e=t.bl,r=t.width,i=l.htmlPaper,n=l._cfg.themeCls+"-axisx";return l._axisX=i.lineX(e.x,e.y,r).addClass(n).css(l._cfg.xAxis.css||{}),l._axisX},drawAxisY:function(){var l=this,t=l._innerContainer,e=t.tl,r=t.height,i=l.htmlPaper,n=l._cfg.themeCls+"-axisy";return l._axisY=i.lineY(e.x,e.y,r).addClass(n).css(l._cfg.yAxis.css||{}),l._axisY},drawLabelsX:function(){var l=this;for(var t in l._pointsX)l._labelX[t]=l.drawLabelX(t,l._pointsX[t].number)},drawLabelsY:function(){var l=this;for(var t in l._pointsY)l._labelY[t]={0:l.drawLabelY(t,l._pointsY[t].number),num:l._pointsY[t].number};return l._labelY},drawLabelX:function(t,r){var i,n=this,s=n.htmlPaper,a=n._pointsX,o=a.length||0,h=n._cfg.themeCls+"-xlabels",c="{{data}}",y="";return o>t?(c=n._cfg.xLabels.template||c,y=l.isFunction(c)?c(t,r):e(c).render({data:r}),i=a[t],i[0]=s.text(i.x,i.y,"<span class="+h+">"+y+"</span>","center").children().css(n._cfg.xLabels.css),i[0]):x},drawLabelY:function(t,r){var i=this,n=i.htmlPaper,s=i._cfg.themeCls+"-ylabels";return tpl="{{data}}",content="",tpl=i._cfg.yLabels.template||tpl,content=l.isFunction(tpl)?tpl(t,r):e(tpl).render({data:r}),content&&n.text(i._pointsY[t].x,i._pointsY[t].y,"<span class="+s+">"+content+"</span>","right","middle").children().css(i._cfg.yLabels.css)},renderTip:function(){var t=this,e=t._cfg,r=t._innerContainer,i=e.tip.boundryDetect?{x:r.tl.x,y:r.tl.y,width:r.width,height:r.height}:{},n=l.mix(e.tip,{rootNode:t._$ctnNode,clsName:e.themeCls,boundry:i});return t.tip=new c(n),t.tip},renderEvtLayout:function(){var l,t=this,e=t._cfg,r=t._innerContainer,i=(r.tl.y,r.height),n=t._evtEls._rects=[];l=t._evtEls.paper?t._evtEls.paper:t._evtEls.paper=new s(t._$ctnNode,{clsName:v,prependTo:!1,width:r.width,height:i,left:r.tl.x,top:r.tl.y,css:{"z-index":20,background:"#fff",filter:"alpha(opacity =1)","-moz-opacity":.01,"-khtml-opacity":.01,opacity:.01}});for(var a in t._points){var n=[];for(var o in t._points[a]){var h=2*(t._points[a][o].r||e.points.attr.r);n[o]=l.rect(t._points[a][o].x-h/2,t._points[a][o].y-h/2,h,h).attr({line_index:a,index:o}).addClass(g)}t._evtEls._rects[a]=n}},fix2Resize:function(){var t=this;t._$ctnNode,t._cfg.anim="";var e=l.buffer(function(){t.init()},200);!t.__isFix2Resize&&t.on("resize",function(){t.__isFix2Resize=1,e()})},clearEvtLayout:function(){var l=this;if(l._evtEls._rects)for(var t in l._evtEls._rects)for(var e in l._evtEls._rects[t])l._evtEls._rects[t][e].remove()},renderLegend:function(){var t=this,e=t._cfg.legend,r=e.container&&u(e.container)[0]?u(e.container):t._$ctnNode,i=t._innerContainer,n=t.color._colors,s=n.length,o=t._cfg,h=t._cfg.series,c=l.map(h,function(l,t){t%=s;var e={},r=n[t];return e.text=l.text,e.DEFAULT=r.DEFAULT,e.HOVER=r.HOVER,e}),x=l.merge({interval:20,iconright:5,showicon:!0},o.legend.globalConfig);return t.legend=new a({container:r,paper:t.paper,bbox:{width:i.width,height:i.height,left:i.x,top:i.y},align:o.legend.align||"bc",offset:o.legend.offset||[0,30],globalConfig:x,config:c}),t.legend.on("click",function(l){var t=l.index,e=(l.text,l.icon,l.el);1!=e.hide?(this.hidePoints(t),e.hide=1,e.disable()):(this.showPoints(t),e.hide=0,e.enable())},this),t.legend},showPoints:function(t){var e=this;r.prototype.recoveryData.call(e,t),e._clonePoints[t]=e._points[t],e.animateGridsAndLabels(),e.animateSiblingsPoints(t),e.diffStocksSize(),e._stocks[t]={stocks:e.drawStocks(t)},e.clearEvtLayout(),e.renderEvtLayout(),e.bindEvt(),l.log(e)},hidePoints:function(l){var t=this;r.prototype.removeData.call(t,l),delete t._clonePoints[l],t.animateGridsAndLabels();for(var e in t._stocks[l].stocks)t._stocks[l].stocks[e].remove();t.animateSiblingsPoints(l),t.clearEvtLayout(),t.renderEvtLayout(),t.bindEvt()},animateSiblingsPoints:function(l){var t=this;for(var e in t._stocks)if(l!=e)for(var r in t._stocks[e].stocks)t._points[e]&&t._stocks[e].stocks[r].animate({cx:t._points[e][r].x,cy:t._points[e][r].y},400)},animateGridsAndLabels:function(){var l=this,t=l._cfg.zoomType;if("y"==t){for(var e in l._labelX)l._labelX[e]&&l._labelX[e][0]&&u(l._labelX[e][0]).remove(),l._gridsX[e]&&l._gridsX[e][0]&&u(l._gridsX[e][0]).remove();l.drawGridsX(),l.drawLabelsX()}else if("x"==t){for(var e in l._labelY)l._labelY[e]&&l._labelY[e][0]&&l._labelY[e][0].remove(),l._gridsY[e]&&l._gridsY[e][0]&&l._gridsY[e][0].remove();l.drawGridsY(),l.drawLabelsY()}else if("xy"==t){for(var e in l._labelY)l._labelY[e]&&l._labelY[e][0]&&l._labelY[e][0].remove(),l._gridsY[e]&&l._gridsY[e][0]&&l._gridsY[e][0].remove();l.drawGridsY(),l.drawLabelsY();for(var e in l._labelX)l._labelX[e]&&l._labelX[e][0]&&u(l._labelX[e][0]).remove(),l._gridsX[e]&&l._gridsX[e][0]&&u(l._gridsX[e][0]).remove();l.drawGridsX(),l.drawLabelsX()}},render:function(t){var e=this,r=e._cfg,n=r.themeCls;t&&e._$ctnNode.html(""),e.paper=i(e._$ctnNode[0],r.width,r.height,{position:"absolute"}),e.htmlPaper=new s(e._$ctnNode,{clsName:n}),e._clonePoints=e._points,e.drawTitle(),e.drawSubTitle(),r.tip.isShow&&e.renderTip(),r.xGrids.isShow&&e.drawGridsX(),r.yGrids.isShow&&e.drawGridsY(),r.xAxis.isShow&&e.drawAxisX(),r.yAxis.isShow&&e.drawAxisY(),r.xLabels.isShow&&e.drawLabelsX(),r.yLabels.isShow&&e.drawLabelsY(),e.diffStocksSize(),e.drawAllStocks(),r.legend.isShow&&e.renderLegend(),e.renderEvtLayout(),e.afterRender(),e.fix2Resize(),e.bindEvt(),l.log(e)},bindEvt:function(){var t=this,e=t._evtEls;l.clone(t._cfg.points.hoverAttr),f.detach(u("."+g,u("."+v,t._$ctnNode)),"mouseenter"),f.on(u("."+g,u("."+v,t._$ctnNode)),"mouseenter",function(l){var e=u(l.currentTarget),r=e.attr("index"),i=e.attr("line_index");t._points[i][r].dataInfo&&(t.stockChange(i,r),t._cfg.tip.isShow&&t.tipHandler(i,r))}),f.detach(e.paper.$paper,"mouseleave"),f.on(e.paper.$paper,"mouseleave",function(){t.tip&&t.tip.hide(),t.paperLeave()})},stockChange:function(l,t){var e=this,r=e._stocks[l],i={target:r.stocks[t],currentTarget:r.stocks[t],lineIndex:Math.round(l),stockIndex:Math.round(t)};e.fire("stockChange",i)},tipHandler:function(t,e){var r,i,n=this,s=n.color.getColor(t).DEFAULT,a=n.tip,o=n._cfg,h=o.tip.template,c=a.getInstance();h&&(r=n._points[t][e].dataInfo,l.isFunction(h)?a.setContent(h(r)):a.renderTemplate(h,r),i=n._points[t][e],a.isVisable()?a.animateTo(i.x,i.y):a.moveTo(i.x,i.y),c.css(n.processAttr(o.tip.css,s)))},paperLeave:function(){var l=this;l.fire("paperLeave",l)},afterRender:function(){var l=this;l.fire("afterRender",l)},getPaper:function(){return this.htmlPaper},clear:function(){this.paper.clear()}}),_},{requires:["base","gallery/template/1.0/index","gallery/kcharts/1.2/basechart/index","gallery/kcharts/1.2/raphael/index","gallery/kcharts/1.2/tools/color/index","gallery/kcharts/1.2/tools/htmlpaper/index","gallery/kcharts/1.2/legend/index","./theme","gallery/kcharts/1.2/tools/touch/index","gallery/kcharts/1.2/tip/index"]});