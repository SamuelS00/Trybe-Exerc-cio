from collections import defaultdict


# when creating a defaultdict we can say the default key
default = defaultdict(list)
default["time"].append("Brasil")
default["time"].append("Argentina")
default["time"].append("Alemanha")
default["time"].append("Italia")
print(default["time"], default["Instructor"])
