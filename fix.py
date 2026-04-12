import sys

filename = '/Users/samarjitroy/Downloads/Clusterofstars/Website/src/pages/Home.tsx'
with open(filename, 'r') as f:
    lines = f.readlines()

new_lines = []
skip = False
for line in lines:
    if '<div class="h-full flex gap-4" bis_skin_checked="1">' in line:
        continue # Skip the garbled line
    
    new_lines.append(line)

content = "".join(new_lines)

if "import VerticalMarquee" not in content:
    content = content.replace("import './Home.css';", "import VerticalMarquee from '../components/VerticalMarquee';\nimport './Home.css';")

replacement = """            </div>
          </motion.div>
          <VerticalMarquee />
        </div>
      </section>"""
      
target = """            </div>
          </motion.div>
        </div>
      </section>"""

if "<VerticalMarquee />" not in content:
    content = content.replace(target, replacement)

with open(filename, 'w') as f:
    f.write(content)

print("Fixed Home.tsx successfully.")
