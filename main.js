//Kalo Mau Edit Di nino.js
const _0x5c3b=['cyan','parse','1756058lWtIPs','634419xOQISL','./lib/loader','logger','164209uPrvFa','./lib/color','update','warn','writeFileSync','loadAuthInfo','2BKXUWh','./setting.json','connect','green','sessionName','browserDescription','connecting','fs-extra','75318jHAhoA','@adiwajshing/baileys','File\x20is\x20updated!','open','266286ywJPYF','textSync','NinoBot','Connecting...','log','blue','spinnies','./nino.js','56957JKdjvy','Standard','\x20Scan\x20the\x20qr\x20code\x20above','.json','Firefox','add','[WATCH]','fail','../main.js','14DHQaUr','3.0.0','default','figlet','../nino.js','Welcome\x20back,\x20Owner!\x20Hope\x20you\x20are\x20doing\x20well~','white','49382MQJOCh'];const _0x1c0e36=_0x5df2;function _0x5df2(_0x5ba70d,_0x43a78f){return _0x5df2=function(_0x5c3b9d,_0x5df267){_0x5c3b9d=_0x5c3b9d-0x1d0;let _0x106cf7=_0x5c3b[_0x5c3b9d];return _0x106cf7;},_0x5df2(_0x5ba70d,_0x43a78f);}(function(_0x2d5e7b,_0x53ed5e){const _0x259e4f=_0x5df2;while(!![]){try{const _0x56361f=parseInt(_0x259e4f(0x1f3))+parseInt(_0x259e4f(0x1fc))*parseInt(_0x259e4f(0x1d2))+parseInt(_0x259e4f(0x1df))*parseInt(_0x259e4f(0x1eb))+parseInt(_0x259e4f(0x1d6))+parseInt(_0x259e4f(0x1e7))+parseInt(_0x259e4f(0x1d9))+-parseInt(_0x259e4f(0x1d5));if(_0x56361f===_0x53ed5e)break;else _0x2d5e7b['push'](_0x2d5e7b['shift']());}catch(_0x52c61a){_0x2d5e7b['push'](_0x2d5e7b['shift']());}}}(_0x5c3b,0x615ad));const {WAConnection,MessageType,Mimetype,Presence,Browsers}=require(_0x1c0e36(0x1e8)),{color,bgcolor}=require(_0x1c0e36(0x1da)),spin=require(_0x1c0e36(0x1f1)),fs=require(_0x1c0e36(0x1e6)),spinner={'interval':0x78,'frames':['🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛']};let globalSpinner;const getGlobalSpinner=(_0x45a1d7=![])=>{const _0x309987=_0x1c0e36;if(!globalSpinner)globalSpinner=new spin({'color':_0x309987(0x1f0),'succeedColor':'green','spinner':spinner,'disableSpins':_0x45a1d7});return globalSpinner;};spins=getGlobalSpinner(![]);const info=(_0x112e91,_0x1897df)=>{const _0x1aae7d=_0x1c0e36;spins[_0x1aae7d(0x1db)](_0x112e91,{'text':_0x1897df});},start=(_0x598672,_0x56940c)=>{const _0x285cdd=_0x1c0e36;spins[_0x285cdd(0x1f8)](_0x598672,{'text':_0x56940c});},success=(_0x350b78,_0x5131c9)=>{spins['succeed'](_0x350b78,{'text':_0x5131c9});},close=(_0x45e1e5,_0x41c9c7)=>{const _0x1a0116=_0x1c0e36;spins[_0x1a0116(0x1fa)](_0x45e1e5,{'text':_0x41c9c7});},figlet=require(_0x1c0e36(0x1ff)),{sleep}=require('./lib/myfunc'),{uncache,nocache}=require(_0x1c0e36(0x1d7)),setting=JSON[_0x1c0e36(0x1d4)](fs['readFileSync'](_0x1c0e36(0x1e0)));require(_0x1c0e36(0x1f2)),nocache(_0x1c0e36(0x200),_0x1f8e08=>console[_0x1c0e36(0x1ef)](color(_0x1c0e36(0x1f9),_0x1c0e36(0x1d3)),color('\x27'+_0x1f8e08+'\x27','green'),_0x1c0e36(0x1e9))),nocache(_0x1c0e36(0x1fb),_0x4dbfc4=>console['log'](color(_0x1c0e36(0x1f9),_0x1c0e36(0x1d3)),color('\x27'+_0x4dbfc4+'\x27',_0x1c0e36(0x1e2)),_0x1c0e36(0x1e9)));const starts=async(_0x5ef1ad=new WAConnection())=>{const _0x455718=_0x1c0e36;_0x5ef1ad['version']=[0x2,0x847,0x6],_0x5ef1ad[_0x455718(0x1d8)]['level']=_0x455718(0x1dc),console[_0x455718(0x1ef)](color(figlet[_0x455718(0x1ec)](_0x455718(0x1ed),{'font':_0x455718(0x1f4),'horizontalLayout':_0x455718(0x1fe),'vertivalLayout':_0x455718(0x1fe),'width':0x50,'whitespaceBreak':![]}),_0x455718(0x1d3))),console['log'](color('[NINO]','cyan'),color('Owner\x20is\x20online\x20now!',_0x455718(0x1e2))),console[_0x455718(0x1ef)](color('[NINO]','cyan'),color(_0x455718(0x1d0),_0x455718(0x1e2))),_0x5ef1ad[_0x455718(0x1e4)]=['NINO\x20-\x20BOT',_0x455718(0x1f7),_0x455718(0x1fd)],_0x5ef1ad['on']('qr',()=>{const _0x2ddb92=_0x455718;console[_0x2ddb92(0x1ef)](color('[',_0x2ddb92(0x1d1)),color('!','red'),color(']','white'),color(_0x2ddb92(0x1f5)));}),fs['existsSync']('./'+setting['sessionName']+_0x455718(0x1f6))&&_0x5ef1ad[_0x455718(0x1de)]('./'+setting[_0x455718(0x1e3)]+_0x455718(0x1f6)),_0x5ef1ad['on'](_0x455718(0x1e5),()=>{const _0xe80efb=_0x455718;start('2',_0xe80efb(0x1ee));}),_0x5ef1ad['on'](_0x455718(0x1ea),()=>{success('2','Connect,\x20Welcome\x20Owner');}),await _0x5ef1ad[_0x455718(0x1e1)]({'timeoutMs':0x1e*0x3e8}),fs[_0x455718(0x1dd)]('./'+setting['sessionName']+_0x455718(0x1f6),JSON['stringify'](_0x5ef1ad['base64EncodedAuthInfo'](),null,'\x09')),_0x5ef1ad['on']('chat-update',async _0x5eb3a2=>{require('./nino.js')(_0x5ef1ad,_0x5eb3a2);});};starts();