export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      business_settings: {
        Row: {
          created_at: string | null
          id: string
          instagram_url: string | null
          logo_url: string | null
          name: string | null
          pinterest_url: string | null
          tiktok_url: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          instagram_url?: string | null
          logo_url?: string | null
          name?: string | null
          pinterest_url?: string | null
          tiktok_url?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          instagram_url?: string | null
          logo_url?: string | null
          name?: string | null
          pinterest_url?: string | null
          tiktok_url?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      categories: {
        Row: {
          active: boolean | null
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      order_items: {
        Row: {
          created_at: string | null
          id: string
          order_id: string
          price: number
          product_id: string
          quantity: number
        }
        Insert: {
          created_at?: string | null
          id?: string
          order_id: string
          price: number
          product_id: string
          quantity?: number
        }
        Update: {
          created_at?: string | null
          id?: string
          order_id?: string
          price?: number
          product_id?: string
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string | null
          customer_email: string | null
          customer_name: string | null
          id: string
          payment_intent_id: string | null
          shipping_address: Json | null
          status: string
          stripe_session_id: string | null
          total: number
          user_id: string
        }
        Insert: {
          created_at?: string | null
          customer_email?: string | null
          customer_name?: string | null
          id?: string
          payment_intent_id?: string | null
          shipping_address?: Json | null
          status?: string
          stripe_session_id?: string | null
          total?: number
          user_id: string
        }
        Update: {
          created_at?: string | null
          customer_email?: string | null
          customer_name?: string | null
          id?: string
          payment_intent_id?: string | null
          shipping_address?: Json | null
          status?: string
          stripe_session_id?: string | null
          total?: number
          user_id?: string
        }
        Relationships: []
      }
      pages: {
        Row: {
          active: boolean
          content: string
          created_at: string | null
          display_order: number | null
          id: string
          show_in_footer: boolean | null
          show_in_nav: boolean | null
          slug: string
          title: string
          updated_at: string | null
        }
        Insert: {
          active?: boolean
          content: string
          created_at?: string | null
          display_order?: number | null
          id?: string
          show_in_footer?: boolean | null
          show_in_nav?: boolean | null
          slug: string
          title: string
          updated_at?: string | null
        }
        Update: {
          active?: boolean
          content?: string
          created_at?: string | null
          display_order?: number | null
          id?: string
          show_in_footer?: boolean | null
          show_in_nav?: boolean | null
          slug?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      product_categories: {
        Row: {
          category_id: string
          product_id: string
        }
        Insert: {
          category_id: string
          product_id: string
        }
        Update: {
          category_id?: string
          product_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_categories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_categories_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      product_images: {
        Row: {
          created_at: string | null
          display_order: number | null
          id: string
          image_url: string
          is_featured: boolean | null
          product_id: string
        }
        Insert: {
          created_at?: string | null
          display_order?: number | null
          id?: string
          image_url: string
          is_featured?: boolean | null
          product_id: string
        }
        Update: {
          created_at?: string | null
          display_order?: number | null
          id?: string
          image_url?: string
          is_featured?: boolean | null
          product_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_images_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      product_tags: {
        Row: {
          product_id: string
          tag_id: string
        }
        Insert: {
          product_id: string
          tag_id: string
        }
        Update: {
          product_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_tags_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          active: boolean
          category_id: string | null
          created_at: string | null
          description: string | null
          enabled: boolean | null
          featured: boolean | null
          id: string
          images: string[] | null
          inventory_count: number | null
          name: string
          price: number
          price_tiers: Json | null
          quantity: number
          sku: string | null
          stripe_enabled: boolean | null
          stripe_price_id: string | null
          tag_ids: string[] | null
          updated_at: string | null
        }
        Insert: {
          active?: boolean
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          enabled?: boolean | null
          featured?: boolean | null
          id?: string
          images?: string[] | null
          inventory_count?: number | null
          name: string
          price?: number
          price_tiers?: Json | null
          quantity?: number
          sku?: string | null
          stripe_enabled?: boolean | null
          stripe_price_id?: string | null
          tag_ids?: string[] | null
          updated_at?: string | null
        }
        Update: {
          active?: boolean
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          enabled?: boolean | null
          featured?: boolean | null
          id?: string
          images?: string[] | null
          inventory_count?: number | null
          name?: string
          price?: number
          price_tiers?: Json | null
          quantity?: number
          sku?: string | null
          stripe_enabled?: boolean | null
          stripe_price_id?: string | null
          tag_ids?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      role_change_audit: {
        Row: {
          changed_at: string | null
          changed_by: string
          id: string
          new_role_id: string
          old_role_id: string | null
          user_id: string
        }
        Insert: {
          changed_at?: string | null
          changed_by: string
          id?: string
          new_role_id: string
          old_role_id?: string | null
          user_id: string
        }
        Update: {
          changed_at?: string | null
          changed_by?: string
          id?: string
          new_role_id?: string
          old_role_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_change_audit_new_role_id_fkey"
            columns: ["new_role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "role_change_audit_old_role_id_fkey"
            columns: ["old_role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          slug: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          slug: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      stripe_connections: {
        Row: {
          auth_code: string
          created_at: string | null
          id: string
          status: string
          updated_at: string | null
        }
        Insert: {
          auth_code: string
          created_at?: string | null
          id?: string
          status: string
          updated_at?: string | null
        }
        Update: {
          auth_code?: string
          created_at?: string | null
          id?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      tags: {
        Row: {
          active: boolean | null
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      theme_settings: {
        Row: {
          created_at: string | null
          font_family: string
          id: string
          is_active: boolean | null
          primary_color: string
          secondary_color: string
          tertiary_color: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          font_family?: string
          id?: string
          is_active?: boolean | null
          primary_color?: string
          secondary_color?: string
          tertiary_color?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          font_family?: string
          id?: string
          is_active?: boolean | null
          primary_color?: string
          secondary_color?: string
          tertiary_color?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          created_at: string | null
          id: string
          role_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          role_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          role_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_profiles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      admin_get_user_id_by_email: {
        Args: { query_email: string }
        Returns: string
      }
      admin_set_user_role: {
        Args: { role_slug: string; target_user: string }
        Returns: undefined
      }
      admin_set_user_role_with_audit: {
        Args: { role_slug: string; target_user: string }
        Returns: undefined
      }
      current_user_role: { Args: never; Returns: string }
      is_admin: { Args: never; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
