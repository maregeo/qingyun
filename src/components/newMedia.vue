<template lang="html">
    <div class="newMedia">
      <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark">
             <img src="../assets/images/newmedia.jpg" class="v-success-img"/>
            <!--<xuetangimg src="../assets/images/a1.jpg" alt="" style="width:100%; height: 100vh;">-->
            <div class="v-convention-wrapp">
			        <div class="v-convention-auto">
                <p>氢云新媒体</p>
                <p>氢云新媒体矩阵包括环球人力资源智库、 睡前学管理、每天学点HR、管理定见等优 质微信公众号，各具特色，功能互补， 错位发展。</p>
              </div>
            </div>
            
            <el-row class="qingKe_top">
          <el-col :span="4"><div class="qingKe_top_left" style="text-align:center;">氢云新媒体
          </div></el-col>
          <el-col :span="20"><div class="qingKe_top_right">
            <div>关于氢云新媒体</div>
            <div>公众号简介</div>
            <div >专家资源</div>
            <div >商务合作</div>
            <div >百万客户选择</div>
          </div></el-col>
          
        </el-row>
          </div></el-col>
        </el-row>
        <div class="sy_car_third">
        <p>氢云新媒体</p>
        <p>氢云新媒体矩阵包括环球人力资源智库、解读标杆、每天学点HR、 管理定见等优质微信公众号，各具特色，功能互补，错位发展。 我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， 海量信息和深度资讯充分融通，打造优质新媒体联合传播平台。 你我在这里交汇。150W+关注，10W+量产，多元聚焦、深度广泛， 专注分享推送优质内容和产品，多篇原创深度研究文章引发刷屏风潮， 花式给你好看。</p>
      </div>
      <el-row>
        <el-col :span="12" :push="6">
          <el-row >
            <el-col :span="24">
              <div class="grid-content bg-purple-light">
                <img src="../assets/images/qy-media.png" alt="">
              </div>
            </el-col>
            <!--<el-col :span="4"  class="meiti-pic">-->
            <!--<div class="grid-content bg-purple-light">-->
              <!--<img src="../assets/images/study.png" alt="">-->
              <!--</div>-->
            <!--</el-col>-->
            <!--<el-col :span="4"  class="meiti-pic">-->
            <!--<div class="grid-content bg-purple-light">-->
              <!--<img src="../assets/images/hand.png" alt="">-->
              <!--</div>-->
            <!--</el-col>-->
            <!--<el-col :span="4"  class="meiti-pic">-->
            <!--<div class="grid-content bg-purple-light">-->
              <!--<img src="../assets/images/read.png" alt="">-->
              <!--</div>-->
            <!--</el-col>-->
            <!--<el-col :span="4"  class="meiti-pic">-->
            <!--<div class="grid-content bg-purple-light">-->
              <!--<img src="../assets/images/manage.png" alt="">-->
              <!--</div>-->
            <!--</el-col>-->

          </el-row>
        </el-col>
      </el-row>
      <div class="sy_car_second">
        <p>旗下公众号</p>
        <p>氢云新媒体矩阵包括环球人力资源智库、解读标杆、 每天学点HR、管理定见等优质微信公众号， 各具特色，功能互补，错位发展。</p>
        <el-row>
            <el-col :span="12" :push="6" class="v-new-medias">
              	<el-row type="flex" justify="space-between">
					<el-col :span="12" :ms="24">
						<div class="grid-content ">
							<div class="school_list">
								<span></span>
								<span>
									<p>环球人力 资源智库(GHR) </p>
									<p>环球人力资源智库（GHR/GHRlib ——  最具影响力人力资源新媒体， 最好的HR学习地盘；</p>
									<span class="click-more" style="position: relative;top: 2.5rem;">
										<el-button type="text" @click="centerDialogVisible = true">点击了解更多</el-button>
										<el-dialog title="" :visible.sync="centerDialogVisible" fullscreen="true" center>
											<span style="display:inline-block;margin-top: 8%">
												<el-row>
													<el-col :span="8" :push="8" class="v-alet-main">
														<el-row>
															<el-col :span="24">
																<div class="grid-content">
																	<img src="../assets/images/sleep.png" alt="" class="sleep">
																	<div class="sleep-word">睡前学管理</div>
																	<div class="word-min">
																		氢云新媒体矩阵包括环球人力资源智库、解读标杆、每天学点HR、 管理定见等优质微信公众号，各具特色，功能互补，错位发展。 我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， 海量信息和深度资讯充分融通，打造优质新媒体联合传播平台
																	</div>
																	<div class="sleep-footer">
																		<div class="sleep-left">
																			<img src="../assets/images/manage_sign.jpg" alt="">
																		</div>
																		<div class="sleep-right">
																			<p>扫描识别二维码</p>
																			<p>关注睡前学管理</p>
																			<img src="../assets/images/weiXin.png" alt="">
																		</div>
																	</div>
																</div>
															</el-col>
														</el-row>
													</el-col>
												</el-row>
											</span>
										</el-dialog>
									</span>
								</span>
								<span><img src="../assets/images/red_logo.png" alt=""></span>
							</div>
						</div>
					</el-col>
					<el-col :span="12" :ms="24"><div class="grid-content">
						<div class="school_list">
							<span></span>
							<span>
								<p>每天学点HR </p>
								<p>环球人力资源智库（GHR/GHRlib ——  最具影响力人力资源新媒体， 最好的HR学习地盘；</p>
								<span class="click-more" style="position: relative;top: 5.5rem;">
									<el-button type="text" @click="centerDialogVisible = true">点击了解更多</el-button>
									<el-dialog  title=""  :visible.sync="centerDialogVisible"  fullscreen="true" center>
										<span style="display:inline-block;margin-top: 8%"> 
											<el-row>
												<el-col :span="8" :push="8"  class="v-alert-main">
													<el-row>
														<el-col :span="24">
															<div class="grid-content">
																<img src="../assets/images/sleep.png" alt="" class="sleep">
																<div class="sleep-word">睡前学管理</div>
																<div class="word-min">
																	氢云新媒体矩阵包括环球人力资源智库、解读标杆、每天学点HR、 管理定见等优质微信公众号，各具特色，功能互补，错位发展。 我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， 海量信息和深度资讯充分融通，打造优质新媒体联合传播平台
																</div>
																<div class="sleep-footer">
																	<div class="sleep-left">
																		<img src="../assets/images/manage_sign.jpg" alt="">
																	</div>
																	<div class="sleep-right">
																		<p>扫描识别二维码</p>
																		<p>关注睡前学管理</p>
																		<img src="../assets/images/weiXin.png" alt="">
																	</div>
																</div>
															</div>
														</el-col>
													</el-row>
												</el-col>
											</el-row>
										</span>
									</el-dialog>
								</span>
							</span>
							<span  style="display: inline-block"><img src="../assets/images/study.png" class="m-img" alt=""></span>
						</div>
					</div>
				</el-col>
            </el-row>
     	</el-col>
    </el-row>
        <el-row>
            <el-col :span="12" :push="6" class="v-new-medias">
              <el-row type="flex" justify="space-between">
              <el-col :span="12" :ms="24" ><div class="grid-content">
                <div class="school_list">
                   <span></span>
                   <span>
                     <p>睡前学管理 </p>
                     <p>环球人力资源智库（GHR/GHRlib ——  最具影响力人力资源新媒体， 最好的HR学习地盘；</p>
                     <span class="click-more" style="position: relative;top: 5.5rem;" ><el-button type="text" @click="centerDialogVisible = true">点击了解更多</el-button>

                    <el-dialog
                      title=""
                      :visible.sync="centerDialogVisible"
                      fullscreen="true"
                      center>
                      <span style="display:inline-block;margin-top: 8%">
                        <el-row>
                          <el-col :span="8" :push="8" class="v-alert-main">
                            <el-row >
                              <el-col :span="24" ><div class="grid-content">
                                <img src="../assets/images/sleep.png" alt="" class="sleep">
                                <div class="sleep-word">睡前学管理</div>
                                <div class="word-min">氢云新媒体矩阵包括环球人力资源智库、解读标杆、每天学点HR、 管理定见等优质微信公众号，各具特色，功能互补，错位发展。 我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， 海量信息和深度资讯充分融通，打造优质新媒体联合传播平台。</div>
                                <div class="sleep-footer">
                                  <div class="sleep-left"><img src="../assets/images/manage_sign.jpg" alt=""></div>
                                  <div class="sleep-right">
                                    <p>扫描识别二维码</p>
                                    <p>关注睡前学管理</p>
                                    <img src="../assets/images/weiXin.png" alt="">
                                   </div>
                                </div>
                              </div></el-col>
                            </el-row>
                          </el-col>
                        </el-row>
                      </span>
                    </el-dialog></span>
                   </span>
                   <span><img src="../assets/images/read.png" alt=""></span>
                </div>
              </div></el-col>
              <el-col :span="12" :ms="24"><div class="grid-content">
                <div class="school_list">
                    <span></span>
                   <span>
                     <p>管理定见</p>
                     <p>环球人力资源智库（GHR/GHRlib ——  最具影响力人力资源新媒体， 最好的HR学习地盘；</p>
                    <span class="click-more" style="position: relative;top: 5.5rem;"><el-button type="text" @click="centerDialogVisible = true">点击了解更多</el-button>
                    <el-dialog
                      title=""
                      :visible.sync="centerDialogVisible"
                      :fullscreen="true"
                      center>
                      <span style="display:inline-block;margin-top: 8%">
                        <el-row>
                          <el-col :span="8" :push="8" class="v-alert-main">
                            <el-row >
                              <el-col :span="24" ><div class="grid-content">
                                <img src="../assets/images/sleep.png" alt="" class="sleep">
                                <div class="sleep-word">睡前学管理</div>
                                <div class="word-min">氢云新媒体矩阵包括环球人力资源智库、解读标杆、每天学点HR、 管理定见等优质微信公众号，各具特色，功能互补，错位发展。 我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， 海量信息和深度资讯充分融通，打造优质新媒体联合传播平台。</div>
                                <div class="sleep-footer">
                                  <div class="sleep-left"><img src="../assets/images/manage_sign.jpg" alt=""></div>
                                  <div class="sleep-right">
                                    <p>扫描识别二维码</p>
                                    <p>关注睡前学管理</p>
                                    <img src="../assets/images/weiXin.png" alt="">
                                   </div>
                                </div>
                              </div></el-col>
                            </el-row>
                          </el-col>
                        </el-row>
                      </span>
                    </el-dialog></span>
                   </span>
                   <span><img src="../assets/images/manage.png" alt=""></span>
                </div>
              </div></el-col>
            </el-row>
            </el-col>
          </el-row>
      </div>
      <div class="media_car_third">
        <p>专家资源</p>
        <p>整合优质专家资源，为HR提供最新锐的干货为企业管理者提供可落地的决策参考加入GHR明星编委会，成为特约撰稿人、特聘研究员</p>
        <el-row>
          <el-col :span="14" :push="5" class="v-new-media-item">
            <el-row>
              <el-col :span="12"><div class="grid-content  expert "  @click="jumpDetail">
                <div>
                  <div>穆胜</div>
                  <div></div>
                </div>
              </div></el-col>
              <el-col :span="12"><div class="grid-content ">
                  <div class="media-top">
                    <ul>
                     <li><p>环球人力资源智库 专家委员会执行主席</p> </li>
                      <li><p>北京大学光华管理学院工商管理博士后 </p></li>
                      <li><p>胜宴私董会创始人、总裁教练</p> </li>
                      <li><p>中兴通讯、华夏航空等知名企业常年管理顾问</p> </li>
                      <li><p>海尔研究院商业模式转型领衔专家</p></li>
                    </ul>
                  </div>
                  <div class="media-bottom">
                    <p>名家名篇</p>
                    <ul>
                     <li><p>《HR人才洗牌：仅20%会一飞冲天，其余处境堪忧》</p> </li>
                      <li><p>《HR：你是在做“管理”还是在“经营”？》</p> </li>
                      <li><p>《组织转型：大象如何起舞？》 </p></li>
                      <li><p>《HR：你是在做“管理”还是在“经营”？》</p> </li>
                      <li><p>《HR部门可能消失，这不是在开玩笑》</p> </li>
                      <li><p>《HR数据化的四大陷阱，我们不约！》</p></li>
                    </ul>
                  </div>
              </div></el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="14" :push="5" class="v-new-media-item">
            <el-row>
              <el-col :span="12"><div class="grid-content  expert " @click="jumpDetail">
                <div>
                  <div>姚琼</div>
                  <div></div>
                </div>
              </div></el-col>
              <el-col :span="12"><div class="grid-content ">
                  <div class="media-top">
                    <ul>
                      <li><p>环球人力资源智库 专家委员会执行主席</p> </li>
                      <li><p>北京大学光华管理学院工商管理博士后 </p></li>
                      <li><p>胜宴私董会创始人、总裁教练</p> </li>
                      <li><p>中兴通讯、华夏航空等知名企业常年管理顾问</p> </li>
                      <li><p>海尔研究院商业模式转型领衔专家</p></li>
                    </ul>
                  </div>
                  <div class="media-bottom">
                    <p>名家名篇</p>
                    <ul>
                      <li><p>《HR人才洗牌：仅20%会一飞冲天，其余处境堪忧》</p> </li>
                      <li><p>《HR：你是在做“管理”还是在“经营”？》</p> </li>
                      <li><p>《组织转型：大象如何起舞？》 </p></li>
                      <li><p>《HR：你是在做“管理”还是在“经营”？》</p> </li>
                      <li><p>《HR部门可能消失，这不是在开玩笑》</p> </li>
                      <li><p>《HR数据化的四大陷阱，我们不约！》</p></li>
                    </ul>
                  </div>
              </div></el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="14" :push="5"  class="v-new-media-item">
            <el-row>
              <el-col :span="12"><div class="grid-content  expert " @click="jumpDetail">
                <div>
                  <div>白睿</div>
                  <div ></div>
                </div>
              </div></el-col>
              <el-col :span="12"><div class="grid-content ">
                  <div class="media-top">
                    <ul>
                      <li><p>环球人力资源智库 专家委员会执行主席</p> </li>
                      <li><p>北京大学光华管理学院工商管理博士后 </p></li>
                      <li><p>胜宴私董会创始人、总裁教练</p> </li>
                      <li><p>中兴通讯、华夏航空等知名企业常年管理顾问</p> </li>
                      <li><p>海尔研究院商业模式转型领衔专家</p></li>
                    </ul>
                  </div>
                  <div class="media-bottom">
                    <p>名家名篇</p>
                    <ul>
                      <li><p>《HR人才洗牌：仅20%会一飞冲天，其余处境堪忧》</p> </li>
                      <li><p>《HR：你是在做“管理”还是在“经营”？》</p> </li>
                      <li><p>《组织转型：大象如何起舞？》 </p></li>
                      <li><p>《HR：你是在做“管理”还是在“经营”？》</p> </li>
                      <li><p>《HR部门可能消失，这不是在开玩笑》</p> </li>
                      <li><p>《HR数据化的四大陷阱，我们不约！》</p></li>
                    </ul>
                  </div>
              </div></el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="14" :push="5"  class="v-new-media-item">
            <el-row>
              <el-col :span="12"><div class="grid-content  expert " @click="jumpDetail">
                <div>
                  <div>喻德武</div>
                  <div style="margin-left: 2rem"></div>
                </div>
              </div></el-col>
              <el-col :span="12"><div class="grid-content ">
                  <div class="media-top">
                    <ul>
                      <li><p>环球人力资源智库 专家委员会执行主席</p> </li>
                      <li><p>北京大学光华管理学院工商管理博士后 </p></li>
                      <li><p>胜宴私董会创始人、总裁教练</p> </li>
                      <li><p>中兴通讯、华夏航空等知名企业常年管理顾问</p> </li>
                      <li><p>海尔研究院商业模式转型领衔专家</p></li>
                    </ul>
                  </div>
                  <div class="media-bottom">
                    <p>名家名篇</p>
                    <ul>
                      <li><p>《HR人才洗牌：仅20%会一飞冲天，其余处境堪忧》</p> </li>
                      <li><p>《HR：你是在做“管理”还是在“经营”？》</p> </li>
                      <li><p>《组织转型：大象如何起舞？》 </p></li>
                      <li><p>《HR：你是在做“管理”还是在“经营”？》</p> </li>
                      <li><p>《HR部门可能消失，这不是在开玩笑》</p> </li>
                      <li><p>《HR数据化的四大陷阱，我们不约！》</p></li>
                    </ul>
                  </div>
              </div></el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="14" :push="5"  class="v-new-media-item">
            <el-row>
              <el-col :span="12"><div class="grid-content  expert " @click="jumpDetail">
                <div>
                  <div>王学敏</div>
                  <div style="margin-left: 2rem"></div>
                </div>
              </div></el-col>
              <el-col :span="12"><div class="grid-content ">
                  <div class="media-top">
                    <ul>
                      <li><p>环球人力资源智库 专家委员会执行主席</p> </li>
                      <li><p>北京大学光华管理学院工商管理博士后 </p></li>
                      <li><p>胜宴私董会创始人、总裁教练</p> </li>
                      <li><p>中兴通讯、华夏航空等知名企业常年管理顾问</p> </li>
                      <li><p>海尔研究院商业模式转型领衔专家</p></li>
                    </ul>
                  </div>
                  <div class="media-bottom">
                    <p>名家名篇</p>
                    <ul>
                      <li><p>《HR人才洗牌：仅20%会一飞冲天，其余处境堪忧》</p> </li>
                      <li><p>《HR：你是在做“管理”还是在“经营”？》</p> </li>
                      <li><p>《组织转型：大象如何起舞？》 </p></li>
                      <li><p>《HR：你是在做“管理”还是在“经营”？》</p> </li>
                      <li><p>《HR部门可能消失，这不是在开玩笑》</p> </li>
                      <li><p>《HR数据化的四大陷阱，我们不约！》</p></li>
                    </ul>
                  </div>
              </div></el-col>
            </el-row>
          </el-col>
        </el-row>
        <p class="media_3">更多专家</p>
        <p class="media_4">曾双喜、张立志、朱国成、袁寒林、周雨、思二勋、菲凡、叶彬…… 更多名家名篇，期待您的关注！</p>
      </div>
       <div class="sy_car_second">
        <p>商务合作 </p>
        <el-row>
          <el-col :span="12" :push="6" class="v-mew-table">
            <el-row :gutter="20">
              <el-col :span="24">
                  <div class="chart">
                    <table>
                      <tr>
                        <th class="first">公众号</th>
                        <th>粉丝数量</th>
                        <th>广告位/单价</th>
                        <th>头条</th>
                        <th>第二条 </th>
                        <th>第二条过后</th>
                      </tr>
                      <tr>
                        <td class="first" style="text-align: left;"><span style="margin-left: 0.5rem"><img src="../assets/images/chart-red.png" alt=""></span><span>环球人力资源智库</span></td>
                        <td class="second">76万</td>
                        <td class="third">整版</td>
                        <td class="forth">50,000元</td>
                        <td class="forth">1,500元 </td>
                        <td class="forth">7,000元</td>
                      </tr>
                      <tr>
                        <td class="first" style="text-align: left;"><span style="margin-left: 0.5rem"><img src="../assets/images/chart-blue.png" alt=""></span><span>睡前学管理</span></td>
                        <td class="second">17万</td>
                        <td class="third">整版</td>
                        <td class="forth">20,000元 </td>
                        <td class="forth">3,000元</td>
                        <td class="forth">3,000元</td>
                      </tr>
                      <tr>
                        <td class="first" style="text-align: left;"><span style="margin-left: 0.5rem"><img src="../assets/images/chart-white.png" alt=""></span><span>每天学点HR</span></td>
                        <td class="second">9万</td>
                        <td class="third">整版</td>
                        <td class="forth">8,000元</td>
                        <td class="forth">1,500元</td>
                        <td class="forth">1,500元</td>
                      </tr>
                      <tr>
                        <td class="first">广告文案排版服务</td>
                        <td class="second1"><p></p></td>
                        <td class="third">整版</td>
                        <td colspan="3" style="color: #00ec03">1,000元 / 篇</td>
                      </tr>
                       <tr>
                        <td class="first">广告文案排版服务</td>
                        <td class="second1"><p></p></td>
                        <td class="third">整版</td>
                        <td colspan="3" style="color: #00ec03">30,000元 / 3篇，3篇起</td>
                      </tr>
                    </table>
                      <div style="padding:0 10px;">
                      <p style="font-size: 1.6rem;text-align: left;">备注：</p>
                      <p style="font-size: 1.2rem;text-align: left;color:#595959 ;">1.、整版，指该篇文章全篇都供广告主使用，文案及排版由广告主自行提供。经验证，整版软广推广效果最佳，
                        好的软文配合GHR的推广可迅速引爆朋友圈。</p>
                      <p style="font-size: 1.2rem;text-align: left;color:#595959 ;">1.订单一次性满10条，并提前付全款的客户，全部费用8折；订单一次性满5条，并提前付全款的客户，全部费用9折。</p>
                      <p style="font-size: 1.2rem;text-align: left;color:#595959 ;">1.以上条款解释权归GHR所有，GHR保留所推广产品的选择权。</p>
                      </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>

      <!--
      <div class="sy_car_third">
        <p>百万HR的 共同选择 </p>
        <p>环球人力资源智库（GHR/GHRlib）—— 最具影响力人力资源新媒体， 最好的HR学习地盘；组织学习与人才培养专家，致力于推动中国企业 人力资源效能提升与组织转型。</p>
        <el-row>
          <el-col :span="12" :push="6">
            <el-row :gutter="20">
              <el-col :span="6" :xs="12" :ms="14" :md="12" :lg="6" v-for="item in logos" key="logos">
                <div class="parent">
                  <div class="list_icon">
                    <div><img :src="getImg(item)" alt="" style="width: 13rem;"></div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="qingke_footer">
          <el-row>
          <el-col :span="16" :push="4">
            <el-row>
              <el-col :span="24"><div class="grid-content">
              <div>
                  <img src="../assets/images/logo.png" alt="" style="height: 5rem;width:rem;padding-top: 2rem">
               </div>
              </div></el-col>
            </el-row>
           </el-col>
        </el-row>
        <el-row>
          <el-col :span="16" :push="4">
            <el-row type="flex" justify="space-around">
              <el-col :span="24"><div class="grid-content qingke_footer_word">
              <p>
              <span><img src="" alt=""></span>
              <span class="convention_bottom">175 66666 666</span>
              </p>
              <p>
              <span><img src="" alt=""></span>
              <span class="convention_bottom">上海市 长宁区</span>
              </p>
              <p>
              <span><img src="" alt=""></span>
              <span class="convention_bottom">GHRLIB@XX.COM</span>
              </p>
              </div></el-col>

              <el-col :span="24"><div class="grid-content qingke_footer_word">
              <p>旗下品牌：</p>
              <p>
                <span><img src="../assets/images/weiXin.png" alt="" style="height: 2rem;width:3rem;"></span>
                <span><img src="../assets/images/weiXin.png" alt="" style="height: 2rem;width:3rem;"></span>
              </p>
              <p>
                <span><img src="../assets/images/weiXin.png" alt="" style="height: 2rem;width:3rem;"></span>
                <span><img src="../assets/images/weiXin.png" alt="" style="height: 2rem;width:3rem;"></span>
              </p>
              <p>
                <span><img src="../assets/images/weiXin.png" alt="" style="height: 2rem;width:3rem;"></span>
                <span><img src="../assets/images/weiXin.png" alt="" style="height: 2rem;width:3rem;"></span>
              </p>
              </div></el-col>

              <el-col :span="24"><div class="grid-content qingke_footer_word">
              <p>在线学习：</p>
              <p><img src="../assets/images/weiXin.png" alt=""></p>
              <p><img src="../assets/images/weiXin.png" alt=""></p>
              <p><img src="../assets/images/weiXin.png" alt=""></p>
              </div></el-col>
              <el-col :span="24"><div class="grid-content qingke_footer_word constant">
              <p>联系电话：</p>
              <p>培训业务</p>
              <p>微咨询</p>
              <p>在线学习</p>
              <p>广告合作</p>
              <p>市场合作</p>
              <p>加入我们</p>
              </div></el-col>
              <el-col :span="24"><div class="grid-content qingke_footer_word">
              <p>市场合作：</p>
              <p>市场合作：</p>
              </div></el-col>
            </el-row>
           </el-col>
        </el-row>
        </div>
        -->
        <div class="sy_car_third">
            <p>百万HR的 共同选择 </p>
            <p>环球人力资源智库（GHR/GHRlib）—— 最具影响力人力资源新媒体， 最好的HR学习地盘；组织学习与人才培养专家，致力于推动中国企业 人力资源效能提升与组织转型。</p>
            <el-row>
              <el-col :span="12" :push="6" class="v-hr">
                <el-row class="v-hello-row">
                  <el-col :span="6" :xs="12" :ms="14" :md="12" :lg="6" v-for="item in logos" key="logos" class="v-hr-list">
                    <div class="parent">
                      <div class="list_icon">
                        <div><img :src="getImg(item)" alt="" class="v-hr-imgs"></div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
        </div>
      <footer-bar></footer-bar>
    </div>
</template>

<script>
  import footerBar from './footer_bar' //导入组件
  export default {
    name: 'bussinessSchool',
    components: {
    	footerBar: footerBar //注册组件
  	},
    data (){
      return{
        centerDialogVisible: false,
        logos: [
          'ali.png',
          'tencent.png',
          'qs.png',
          'bayer-01.png',
          'flp.png',
          'ft.png',
          'parker-01.png',
          'liNing.png',
          'nh.png',
          'lianTong.png',
          'meiDi.png',
          'jh.png',
          'sq.png',
          'wangYi.png',
          'kpmg-01.png',
          'tcl-01.png'
        ]
      }
    },
    methods:{
      jumpDetail(){
        this.$router.push('/detail')
      },
      getImg(url) {
        // console.log(url)'../assets/images/'+
        return require(`../assets/images/${url}`)
      },
	 
    }
  }
</script>

<style lang="css">
.m-img{
      height: 12rem;
    width: 12rem;
    background-color: rgb(255, 255, 255);
}
.v-success-img{
		width:100%;
	}
	.v-convention-wrapp{
		position: absolute;
		top:0;
		left:0;
		bottom:0;
		width:100%;
	}
	.v-convention-auto{
		width:30%;
		margin:20%  auto 0;
	}
  .v-convention-auto p:first-child{
		font-size: 6rem;
    	color: #ffffff;
   	}
	.v-convention-auto  p:nth-child(2){
		font-size: 2rem;
   		color: red;
	}
  .school_top{
    height:100vh;
    width:100%;
    background-image: url("../assets/images/newmedia.jpg");
    background-size: 100% 100%;
  }
  .school_top>p:nth-child(1){
    font-size: 6rem;
    color: #ffbc08;
    position: absolute;
    top:35%;
    left: 30%;
  }
  .school_top>p:nth-child(2){
    font-size: 2rem;
    width:25%;
    position: absolute;
    color: #ffffff;
    top:45%;
    left: 30%;
  }
  .school_top>p:nth-child(3){
    color: #ffffff;
    font-size: 3rem;
    position: absolute;
    top:70%;
    left: 30%;
    left: 30%;
    vertical-align: top;
  }

  .qingKe_top{
    position: relative;
    background-color: #f4f4f4;
    height: 6rem;
    line-height: 6rem;
    border-bottom: 0.1rem solid gray;
    top:95%;
    z-index: 666;
  }
  .qingKe_top_left{
    font-size: 3rem;
    font-weight: 600;
  }
  .qingKe_top_right{
    display: flex;
    margin-top: 2rem;
  }
  .qingKe_top_right>div{
    text-align: center;
    width:25%;
    line-height: 2rem;
    font-size: 1.4rem;
    height: 2rem;
    border-right: 0.1rem solid gray;
    justify-content: space-around;
  }
  .grid-content>img{
    width:100%;
  }
  .school_list{
    height:18rem;
    width:25rem;
	padding-bottom:20px;
    background-color: #ffbc08;
  }
  .school_list>span{
    display: inline-block;
  }
  .school_list>span:nth-child(1){
    position: absolute;
  }
  .school_list>span:nth-child(2)>p:nth-child(1){
    font-size: 2.5rem;
    font-weight: 600;
    width:60%;
    margin-top: 10%;
    margin-left: 5%;
  }
  .school_list>span:nth-child(2)>p:nth-child(2){
    /*position: absolute;*/
    top:10%;
    margin-left: 6%;
    width:60%;
  }
  .click-more{
    padding:0.5rem 0.5rem;
   
    color: #ffffff;
    font-size: 1.2rem;
    margin-top: 3rem;

  }

  .click-more .el-dialog, .el-pager li{
	  background:rgba(34,34,34,0.95);
  }
  .click-more .el-button--text{
    color: #ffffff;
  }
  /*.click-more .el-button{*/
    /*padding:4px 9px;*/
  /*}*/
  .click-more span{
    padding:0.1rem 0.5rem;
   
  }
  .school_list>span:nth-child(1){
    height:100%;
    width:0.8rem;
    background-color: #565656;
  }
  .school_list>span:nth-child(3){
    height:12rem;
    width: 12rem;
    background-color: #ffffff;
    border:0.1rem solid gray;
    position: absolute;
    top:2.8rem;
    margin-left: 6rem;
  }
  .school_list>span:nth-child(3)>img{
    height:12rem;
    width: 12rem;
  }
  .expert>div{
    display: inline-block;
    vertical-align: middle;
  }
  .expert{
    height: 35rem;
    background: url("../assets/images/manage.png")  no-repeat;
    background-size:100% 100%;
    /** 
    background-size: 40rem 40rem;
    */

  }
  .el-col-12 .expert{
    /*
    margin-left: 34%;
    */
  }
  .expert>div:nth-child(1)>div:nth-child(1){
    display: inline-block;
    font-size: 5rem;
    color: #FDC02C;
    font-family: "Californian FB";
    vertical-align: top;
    background-color: transparent;
  }
  .expert>div:nth-child(1)>div:nth-child(2){
    display: inline-block;
    background-color: transparent;
    height:16rem;
    border:0.1rem solid #FDC02C;
    position: absolute;
    top:-3rem;
    left: 31%;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Safari and Chrome */
  }

  .media_car_third{
    background-color: #FFFFFF;
    box-sizing: border-box;
    padding-top: 3%;
    padding-bottom: 3%;
  }
  .media_car_third>p:nth-child(1){
    color: #000000;
    text-align: center;
    font-size: 6rem;
    margin-bottom: 2%;
  }
  .media_3{
    color: #000000;
    text-align: center;
    font-size: 6rem;
    margin-bottom: 2%;
  }
  .media_car_third>p:nth-child(2){
    font-size: 2rem;
    color: #ffffff;
    margin-left: 25%;
    margin-right: 25%;
    color: #595959;
    margin-bottom: 5%;
  }
  .media_4{
    font-size: 2rem;
    color: #ffffff;
    margin-left: 25%;
    text-align: center;
    margin-right: 25%;
    color: #595959;
    margin-bottom: 5%;
  }
  .media-bottom{
    margin-left: 0rem;
  }
  .media-top{
    padding:0 0.2rem;
    border: 0.4rem solid #FDC02C;
    width:70%;
    margin-left: -2.2rem;
  }
  .media-top>ul{
    margin-left: 3rem;
    margin-bottom: 0.5rem;
    font-size: 3rem;
  }
  .media-top>ul>li{
    color: #FDC02C;

  }
  .media-top>ul>li>p{
    font-size: 1.4rem;
    color: #565656;
    margin-top: -1rem;
  }
  .media-bottom>p{
    font-size: 1.6rem;
    margin-top: 0.5rem;
    font-weight: 600;
    color: #FDC02C;
  }
  .media-bottom>ul{
    font-size: 1.2rem;
    color: #565656;
    margin-left: 1rem;
    margin-top: 0.5rem;
    font-size: 3rem;
  }
  .media-bottom>ul>li{
    color: #FDC02C;
  }
  .media-bottom>ul>li>p{
    font-size: 1.4rem;
    color: #565656;
    margin-top: -1rem;
  }

  .chart{
    background-color: #ffffff;
    padding-bottom: 2rem;
  }
  .first{
    width:20%;
  }
  .first>span{
    display: inline-block;
    vertical-align: middle;
  }
  .second{
    color: red;
  }
  .second1>p{
    border:0.1rem solid red;
    width:40%;
    margin: 0 auto;
  }
  .third{
    color: #ffbc08;
  }
  .forth{
    color: #00ec03;
  }
  table {
    width:100%;
    border-collapse: collapse;
  }
  table,th, td
  {
    border: 1px solid  gray;
    font-size: 1.8rem;
  }
  th{
    height:5rem;
    font-size: 1.8rem;
    width:10%;
    background-color: #f4f4f4;
  }
  td{
    height:5rem;
    text-align:center;
    vertical-align:middle;
    background-color: #ffffff;
  }
  .click-more .el-dialog, .el-pager li{
    background-color: rgba(34,34,34,0.95);
  }
  .sleep-word{
    font-size: 5rem;
    color: #ffffff;
    margin: 5% 0;
  }
  .word-min{
    font-size: 2rem;
    color: #FCD281;
  }
  .qingke_footer{
    background-color: #222222;
  }
  .sleep{
    height:15rem;
    width:15rem;
  }
  .sleep-left>img{
    height: 12rem;
    width:12rem;
  }
  .sleep-footer{
    display: flex;
    margin: 5% 0;
    justify-content: flex-start;
  }
  .sleep-right{
    position: relative;
    top:5rem;
    left: 4%;
  }
  .sleep-right>p{
    color: #ffffff;
    font-size:1.8rem;
  }
  @media screen and (max-width:640px){
    
		.v-test{
			margin-left:0;
			margin-top:0;
		}
       	.v-convention-wrapp{
			display:none;
       	}
		.sy_car_third>p:nth-child(2){
			width:80%;
			margin:0 auto;
			line-height:18px;
		}
		.sy_car_second>p:nth-child(2){
			width:80%;
			margin:0 auto;
			line-height:18px;
		}
		.v-vonvention-list{
			padding:0 10px;
			width:100%;
			left:0;
		}
		.v-vonvention-list table{
			margin-bottom:0px;
		}
		.v-cont-item{
			width:90%;
			left:0;
			margin:0 auto;
			float:none;
		}
		.v-cont-item span{
			display:block;
			line-height:15px;
		}
		.v-cont-item span:first-child{
			float:left;
		}
		.v-cont-item span:nth-child(2){
			padding-left:30px;
		}
		.v-cont-item img{
			width:15px;
			
		}	
		.good img{
			width:80px!important;
		}
    .bg-purple-light{
      padding-bottom:10px;
    }


    .v-new-medias{
      width:100%;
      left:0;
      padding:0 10px;
      float:none;
    }
    .school_list{
      width:100%;
      height:180px;
      padding-bottom:0px;
    }
    .school_list>span:nth-child(1){
      
    }
    .click-more{
      top:1.5rem!important;
    }
    .school_list>span:nth-child(2)>p:nth-child(1){
      height:25px;
      line-height:25px;
      overflow:hidden;
    }
    .school_list>span:nth-child(2)>p:nth-child(2){
      height:80px;
    }
    .school_list>span:nth-child(3){
      height:6rem;
      width:6rem;
      background-color: #ffffff;
      border: 0.1rem solid gray;
      position: absolute;
      top: 2.8rem;
      margin-left:2.5rem;
    }
    .school_list>span:nth-child(3)>img{
      width:100%;
      height:auto;
    }
    .media_car_third p:nth-child(2){
      width:80%;
      margin:0 auto;
      line-height:20px;
    }
    .v-new-media-item{
      width:100%;
      left:0;
      float:none;
      padding:0 10px;
    }
    .v-new-media-item .el-col-12{
      width:50%;
      padding:0 5px 0 0;
    }
    .expert[data-v-2de593d8] {
        height:10rem;
        background: url(/static/img/manage.0bdd0e4.png) no-repeat;
        background-size:100% 100%;
    }
    .v-new-media-item .el-col-12 .expert {
      margin-left:0;
    }
    .media-top{
      width:100%;
      margin-left:0;
    }
    .media-top>ul{
      margin-left:0;
      margin-bottom:0;
    }
    .media-top ul li p,.media-bottom ul li p{
      height:16px;
      overflow:hidden;
    }
    .media_3{
      margin-top:3%;
    }
    .sy_car_second >p{
        padding-bottom:10px;
    }
    .v-mew-table{
      width:100%;
      left:0;
      float:none;
      padding:0 10px;
    }
    .first{
      width:60px;
      
    }
    .v-mew-table table tr td:first-child img{
      widtH:20px;
      margin-right:5px;
    }

	.el-dialog__body{
    	padding:0!important;
 	}
	 .click-more span{
		 margin-top:5%!important;
	 }

	 .v-alert-main{
		  width:100%;
		left:0;
		float:none;
		padding:0 10px;
	 }
	  .v-alert-main .grid-content{
		 
	  }
	 .v-alert-main img.sleep {
		 padding:10px 0;
		 width:30%;
		 height:auto;
		 margin:0 auto;
		 display:block;
	 }
	 .el-dialog__title{
		 display:none;
	 }
	 
  .expert {
      height:20rem;
  }
	
}
</style>
