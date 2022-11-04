import { Block } from "payload/types";
import { blockFields } from "../../fields/blockFields";
import link from "../../fields/link";
import richText from "../../fields/richText";

export const StickyHighlights: Block = {
  slug: 'stickyHighlights',
  fields: [
    blockFields({
      name: 'stickyHighlightsFields',
      fields: [
        {
          name: 'highlights',
          type: 'array',
          fields: [
            richText(),
            {
              name: 'enableLink',
              type: 'checkbox',
            },
            link({
              disableLabel: true,
              overrides: {
                admin: {
                  condition: (_, { enableLink }) => Boolean(enableLink),
                }
              }
            }),
            {
              name: 'type',
              type: 'radio',
              options: [
                {
                  label: 'Code',
                  value: 'code',
                },
                {
                  label: 'Media',
                  value: 'media',
                },
              ],
            },
            {
              name: 'code',
              type: 'code',
              required: true,
              admin: {
                condition: (_, { type }) => type === 'code'
              }
            },
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                condition: (_, { type }) => type === 'media'
              }
            },
          ],
        },
      ],
    })
  ]
}