#coding=utf-8

import os,requests

def downloadRes(serverUrl,filename):
     cur_file_path = os.path.abspath('.')
     #print cur_file_path
     save_file_name = os.path.join(cur_file_path,filename)
     #判断文件路径是否存在
     dirname = os.path.dirname(save_file_name)
     dirname=dirname.replace('/','\\')
     if os.path.exists(dirname):
          pass
     else:
          os.makedirs(dirname)
     url = serverUrl + filename;
     try:
          # Solution 1
          # f = urllib2.urlopen(url)
          # data = f.read()
          # with open(filename,'wb') as code:
          #      code.write(data)
          #      code.close()

          # Solution 2
          print('Begin downloading ' + filename)
          r = requests.get(url)
          with open(filename,'wb') as code:
               code.write(r.content)
               code.close()
          print('Done!')
     except Exception as e:
          print(e)
          print(url)
    
if __name__ == '__main__':
     fileobj = open('res.txt')
     all_lines = fileobj.readlines()
     for line in all_lines:
          line = line.strip()
          serverurl = "http://szhong.4399.com/4399swf/upload_swf/ftp17/ssj/20151020/w1/"
          downloadRes(serverurl,line)
     fileobj.close()