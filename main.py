from datetime import datetime
now = datetime.now()

f=open("README.md", "w+")
f.write(f'last update at : {now.strftime("%d/%m/%Y %H:%M:%S")} (UTC)')
f.close()
print(1)
