import { useEffect, useCallback } from "react"

export function useTitle(title?: string, options?: { prefix: boolean }): void

export function useTitle(title: string, options = { prefix: true }) {
    const getPrefix: () => string|boolean = useCallback(() => {
        const metaTag: HTMLMetaElement = document.querySelector("meta[name='use-title-prefix']")

        if (metaTag) {
            const prefix = metaTag.getAttribute("content")

            if (prefix) {
                return prefix
            }
        }

        return false
    }, [])

    useEffect(() => {
        const prev = document.title

        const prefix = getPrefix()

        if (title) {
            if (title != prev) {
                if (prefix) {
                    if (options.prefix) {
                        document.title = `${title} - ${prefix}`
                    } else {
                        document.title = title
                    }
                } else {
                    document.title = title
                }
            }
        } else {
            if (prefix && typeof prefix == "string") {
                if (prefix != prev) {
                    document.title = prefix
                }
            }
        }

        return () => {
            document.title = prev
        }
    }, [title, options.prefix, getPrefix])
}