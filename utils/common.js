// 省内城市的级联筛选
function queryCity(arr1, arr2,column,value) {
  var data = {
    multiArray: arr1,//this.data.multiArray,
    multiIndex: arr2 //this.data.multiIndex
  };
  data.multiIndex[column] = value;
  switch (column) {
    case 0:
      switch (data.multiIndex[0]) {}
      data.multiIndex[1] = 0;
      data.multiIndex[2] = 0;
      break;
    case 1:
      switch (data.multiIndex[0]) {
        case 0:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ["省直管"];
              break;
            case 1:
              data.multiArray[2] = ["市直管", "岳麓区", "芙蓉区", "天心区", "开福区", "雨花区", "浏阳市", "长沙县", "望城区", "宁乡市", ];
              break;
            case 2:
              data.multiArray[2] = ["市直管", "永定区", "武陵源区", "慈利县", "桑植县", ];
              break;
            case 3:
              data.multiArray[2] = ["市直管", "武陵区", "鼎城区", "津市市", "安乡县", "汉寿县", "澧县", "临澧县", "桃源县", "石门县", ];
              break;
            case 4:
              data.multiArray[2] = ["市直管", "赫山区", "资阳区", "沅江市", "南县", "桃江县", "安化县", ];
              break;
            case 5:
              data.multiArray[2] = ["市直管", "岳阳楼区", "君山区", "云溪区", "汨罗市", "临湘市", "岳阳县", "华容县", "湘阴县", "平江县", ];
            case 6:
              data.multiArray[2] = ["市直管", "天元区", "荷塘区", "芦淞区", "石峰区", "醴陵市", "株洲县", "攸县", "茶陵县", "炎陵县", ];
              break;
            case 7:
              data.multiArray[2] = ["市直管", "岳塘区", "雨湖区", "湘乡市", "韶山市", "湘潭县", ];
              break;
            case 8:
              data.multiArray[2] = ["市直管", "雁峰区", "珠晖区", "石鼓区", "蒸湘区", "南岳区", "常宁市", "耒阳市", "衡阳县", "衡南县", "衡山县", "衡东县", "祁东县", ];
              break;
            case 9:
              data.multiArray[2] = ["市直管", "北湖区", "苏仙区", "蒸湘区", "资兴市", "桂阳县", "永兴县", "宜章县", "嘉禾县", "临武县", "汝城县", "桂东县", "安仁县", ];
              break;
            case 10:
              data.multiArray[2] = ["市直管", "冷水滩区", "零陵区", "东安县", "道县", "宁远县", "江永县", "蓝山县", "新田县", "双牌县", "祁阳县", "江华瑶族自治县"];
              break;
            case 11:
              data.multiArray[2] = ["双清区", "大祥区", "北塔区", "武冈市", "邵东县", "邵阳县", "新邵县", "隆回县", "洞口县", "绥宁县", "城步苗族自治县"];
              break;
            case 12:
              data.multiArray[2] = ["鹤城区", "洪江市", "沅陵县", "辰溪县", "溆浦县", "会同县", "麻阳苗族自治县", "新晃侗族自治县", "芷江侗族自治县", "靖州苗族侗族自治县", "通道侗族自治县"];
              break;
            case 13:
              data.multiArray[2] = ["娄星区", "冷水江市", "涟源市", "双峰县", "新化县"];
              break;
            case 14:
              data.multiArray[2] = ["吉首市", "泸溪县", "凤凰县", "花垣县", "保靖县", "古丈县", "永顺县", "龙山县", ];
              break;
          }
          break;
      }
      data.multiIndex[2] = 0;
      break;
  }
  return data;
};
module.exports = {
  queryCity: queryCity,
};