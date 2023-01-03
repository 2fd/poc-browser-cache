# Create files wit KB jumps between them
# for i in {1..100}
# do
#   echo "creating temp_${i}00k.tmp"
#   mkfile -n "${i}k" "temp_${i}k.tmp"
# done

# Create files wit MB jumps between them
for i in {1..100}
do
  echo "${i}m"
  mkfile -n "${i}m" "temp_${i}m.tmp"
done