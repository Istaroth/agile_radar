# Working on the content
This section is for team members and contributors, who work in Git to add to the technology radar.

## Maintaining items

The content of the tech radar is located in the folder  `/radar`. To organize progress over time, the files are structured in subfolders with the release date (YYYY-MM-DD).

For each technology there must be one markdown file (*.md).

All content is written or converted to markdown format (.md).

## Template

It is strongly recommended to use the **_template.md** file as a template for new items.
It also contains the structure that should be used for all items with helpful explanations about the audience and view point to write the content.

If you are unable to work with Git - we can provide you with Microsoft Word templates.

## Radar structure

Each file has [front-matter](https://github.com/jxson/front-matter) header where the attributes of the item are listed:

```markdown

  ---
  title:      "Machine Learning"
  ring:       discover
  quadrant:   data-science-and-analytics
  ---

  Text goes here. You can use **markdown** here.

```

The following front-matter attributes are possible:

- **title**: Name of the Item
- **quadrant**: Quadrant. One of `data-science-and-analytics`, `infrastructure-and-operational-technology`, `platforms-and-partners`, `ui-and-devices`
- **ring**: Ring section in radar. One of `discover`, `productize`, `scale`
- **info**: (optional) A short textual description of the item (visible in overview pages)
- **hidden**: (optional) Set to `true` in order to hide the item. E.g. when under development.

### Quadrant values and their meaning ####
- `data-science-and-analytics` means Data Science & Analytics
All data related technologies and trends like BigData, Business Intelligence, Artifical Intelligence (AI,KI) and Machine Learning are placed here.

- `infrastructure-and-operational-technology` means Infrastructure & Operational Technology
Technologies including Cloud over DevOps, Containerization, Continous Integration/Delivery/Deployment, Build Pipelines, Monitoring, Logging

- `platforms-and-partners` means Platforms & Partners
Technologies useful for product/system collaboration and composable new product forms like APIs, API Management, Partner Platform, Collaboration, Integration
- `ui-and-devices` means UI & Devices
New forms of user interfaces like voice (Amazon Alexa), Chatbots, Virtual/Artifical/Mixed reality devices, Mobile devices and also other IoT devices including Smart Home

### Ring section values and their meaning ####

Each of the items is classified in one of these rings:
- `discover`
 We discover the value of a technology and prove the value for us and our customers. This is typically the stage were we work on PoCs and low-risk tests in apps.
- `productize`
We use it in one or a small amount of products and gather experinece with our customers.
- `scale`
We use it in many products and teams and it has proven to be stable and useful.

## History

The name of the .md file acts as item identifier.

If an item also exists in a newer release, the attributes from the new item are merged with the old ones.
The content of the md-files is also merged. The content of the newest file is displayed first in the radar followed by the older content.

## Technology responsibles
To find out who is already responsible for editing each technology in the radar,just take a look in the file [Technology List](../technologylist.md).
